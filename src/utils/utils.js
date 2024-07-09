import store from "@/store/index.js";

/**
 * Modal 호출
 * */
const modalSetting = (title, code, message, callback, isSuccessBtn, successCallback) => {
    store.commit('showModal', {
        title: title,
        code: code,
        message: message,
        callback: callback,
        isSuccessBtn: isSuccessBtn,
        successCallback: successCallback
    });
}

/**
 * 값 확인
 */
const isNullOrEmpty = (str) => {
    return str === null || str === undefined || str === '';
}

export {
    modalSetting,
    isNullOrEmpty
}