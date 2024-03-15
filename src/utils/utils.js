import store from "@/store/index.js";

/**
 * Modal 호출
 * code | message | callback
 * */
const modalSetting = (code, message, callback) => {
    store.commit('showModal', {
        code: code,
        message: message,
        callback: callback
    });
}

export {
    modalSetting
}