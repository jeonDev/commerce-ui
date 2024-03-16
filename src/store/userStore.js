const userStore = {
    state: {
        id: '',
        name: '',
        tel: '',
        accessToken: '',
        addr: '',
        adrDetail: '',
        zipCode: ''
    },
    mutations : {
        setToken(state, userInfo) {
            state.id = userInfo.id;
            state.name = userInfo.name;
            state.tel = userInfo.tel;
            state.accessToken = userInfo.accessToken;
            state.addr = userInfo.addr;
            state.adrDetail = userInfo.adrDetail;
            state.zipCode = userInfo.zipCode;
        }
    }
}
export default userStore;