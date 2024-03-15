const modalStore = {
    state: {
        title: '',
        code: '',
        message: '',
        isShow : false,
        callback: () => {

        },
        isSuccessBtn : false,
        successCallback: () => {

        }
    },
    mutations: {
        showModal(state, modalInfo) {
            state.title = modalInfo.title;
            state.code = modalInfo.code;
            state.message = modalInfo.message;
            state.isShow = true;
            state.callback = modalInfo.callback;
            state.isSuccessBtn = modalInfo.isSuccessBtn;
            state.successCallback = modalInfo.successCallback;
        },
        hideModal(state) {
            state.title = '';
            state.code = '';
            state.message = '';
            state.isShow = false;
            state.callback = () => {};
            state.isSuccessBtn = false;
            state.successCallback = () => {};
        }
    }
};

export default modalStore;