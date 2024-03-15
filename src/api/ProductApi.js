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