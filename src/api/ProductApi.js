import axios from "@/config/axios.js";

export async function productListApi(request) {
    return await axios.get('/v2/product/view', {params: request})
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function productDetailApi(productInfoSeq) {
    return await axios.get('/v2/productInfo/' + productInfoSeq)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function productApi(productSeq) {
    return await axios.get('/v2/product/' + productSeq)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function adminProductAdd(productInfo) {
    return await axios.post('admin/product/register', productInfo)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}