import axios from "axios";
import {getUserInfo} from "@/utils/utils.js";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

instance.interceptors.request.use(
    function (config) {

        const token = getUserInfo().accessToken;
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
        return Promise.reject(error);
    }
)

export default instance;