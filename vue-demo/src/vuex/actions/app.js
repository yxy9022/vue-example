/**
 * Created by jerry on 2016/10/10.
 */
import API from "../../api"
import * as types from '../mutation-types'

// 查询结果集合
export const setLoading = ({dispatch}, showLoading) => {
    dispatch(types.SET_LOADING, showLoading);
}