/**
 * Created by jerry on 2016/10/10.
 */
import {
    SET_LOADING
}  from '../mutation-types'

const state  = {
    showLoading : false
};

// mutations
const mutations = {
    [SET_LOADING](state, showLoading){
        //console.log(JSON.stringify(list));
        state.showLoading = showLoading;
    }
};

export  default {
    state,
    mutations
}