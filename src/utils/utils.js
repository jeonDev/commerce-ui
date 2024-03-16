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
 * Token Set 호출
 * */
const tokenSetting = (userInfo) => {
    store.commit('setToken', userInfo);
}

const getUserInfo = () => {
    return store.state.userStore;
}

export {
    modalSetting, tokenSetting, getUserInfo
}