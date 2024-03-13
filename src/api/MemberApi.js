import axios from "@/config/axios.js";

export default async function signUp(request) {
    return await axios.post('/v1/member/signup', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
}