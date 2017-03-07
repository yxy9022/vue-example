/**
 * Created by jerry on 2016/10/9.
 */
import {
    SET_LOGON_INFO
}  from '../mutation-types'

const state  = {
    // 查询条件
    isLogin : false,
    userInfo: {
        id: '',
        username: ''
    }
};

// mutations
const mutations = {
    [SET_LOGON_INFO](state , user){
        if(user) {
            state.isLogin = true;
            state.userInfo.id = user.id;
            state.userInfo.username = user.username;
        }else {
            state.isLogin = false;
            state.userInfo.id = '';
            state.userInfo.username = '';
        }
    }
};

export  default {
    state,
    mutations
}