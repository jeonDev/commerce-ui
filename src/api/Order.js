import axios from "@/config/axios.js";

export async function orderApi(request) {
    return await axios.post('/v1/order', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function paymentApi(request) {
    return await axios.post('/v1/payment', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function orderViewGetApi(request) {
    return await axios.get('/admin/order/view', request)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}