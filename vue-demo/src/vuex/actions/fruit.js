/**
 * Created by jerry on 2016/10/9.
 */
import API from "../../api"
import * as types from '../mutation-types'

// 查询结果集合
export const searchFruitList = ({dispatch}, data) => {
    //API.searchFruitList({key: key}).then(reply => {
    //    if (reply.data) {
    dispatch(types.SET_FRUIT_LIST, data);
    //    }
    //})
}

// 更新查询项
export const updateFruitSearchKey = ({dispatch},key) =>{
    dispatch(types.UPDATE_FRUIT_SEARCH_VAL,key);
}