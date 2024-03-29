import axios from "@/config/axios.js";

export async function signUpApi(request) {
    return await axios.post('/v1/member/signup', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function loginApi(request) {
    return await axios.post('/v1/member/login', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}