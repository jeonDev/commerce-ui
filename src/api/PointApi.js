import axios from "@/config/axios.js";

export async function pointAdjustment(request) {
    return await axios.post('/v1/point/adjustment', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function selectPointHistory() {
    return await axios.get('/v1/point/history')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}