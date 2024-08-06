import axios from "axios";
import store from "@/store/index.js";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

instance.interceptors.request.use(
    function (config) {

        const token = sessionStorage.getItem("token");
        if(token != null && token !== '') {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    function (response) {
        return response;
    }, async function (error) {
        const originalRequest = error.config;

        if(error.response.status === 401 && !originalRequest._retry) {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token == null) {
                unauthorizedProcess();
                return Promise.reject(error);
            }

            const issue = await axios.post(
                import.meta.env.VITE_API_URL + "tokenReIssue", {},
                {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem("token")
                    },
                    withCredentials: true
                })
                .catch((err) => {
                    unauthorizedProcess()
                });

            if (issue.data.code === '0000') {
                const accessToken = issue.data.data;
                sessionStorage.setItem("token", accessToken);

                originalRequest._retry = true;
                originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;

                return instance(originalRequest);
            } else {
                unauthorizedProcess()
            }

        } else if (error.response.status === 403) {
            store.commit('showModal', {
                code: '',
                message: '접근 권한 없음'
            })
        }
        return Promise.reject(error);
    }
)

const unauthorizedProcess = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("authority");
    store.commit('showModal', {
        code: '',
        message: '로그인 정보 없음',
        callback: () => {
            location.href = '/'
        }
    })
}

export default instance;