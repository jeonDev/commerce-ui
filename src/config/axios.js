import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use(
    function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    }
)

export default instance;