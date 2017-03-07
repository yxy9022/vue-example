/**
 * Created by jerry on 16/9/29.
 */
import {
    SET_FRUIT_LIST,
    UPDATE_FRUIT_SEARCH_VAL
}  from '../mutation-types'

const state  = {
    // 查询条件
    searchKey : "",
    // 查询结果
    searchResultList : []
};

// mutations
const mutations = {
    [SET_FRUIT_LIST](state, list){
        //console.log(JSON.stringify(list));
        state.searchResultList = list;
    },
    [UPDATE_FRUIT_SEARCH_VAL](state , key){
        state.searchKey = key ;
    }
};

export  default {
    state,
    mutations
}