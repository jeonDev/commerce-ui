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
    }, function (error) {
        if(error.response.status === 401) {
            store.commit('showModal', {
                code: '',
                message: '로그인 정보 없음'
            })
        } else if (error.response.status === 403) {
            store.commit('showModal', {
                code: '',
                message: '접근 권한 없음'
            })
        }
        return Promise.reject(error);
    }
)

export default instance;