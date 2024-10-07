import axios from "@/config/axios.js";

export async function signUpApi(request) {
    return await axios.post('/signup', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function loginApi(request) {
    return await axios.post('/login', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function getOauthLoginPageApi(request) {
    return await axios.get('/oauth/login', {params: request})
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function getMyUserInfo() {
    return await axios.get('/v1/myInfo')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function updateUserInfo(request) {
    return await axios.put('/v1/member/update', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

/** OAuth */
export async function githubCallback(request) {
    return await axios.get('/oauth/github/callback', {params: request})
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}