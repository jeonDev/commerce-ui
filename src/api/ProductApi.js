import axios from "@/config/axios.js";

export async function productListApi() {
    return await axios.get('/v1/product/view')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response.data;
        })
}

export async function productDetailApi(productInfoSeq) {
    return await axios.get('/v1/productInfo/' + productInfoSeq)
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