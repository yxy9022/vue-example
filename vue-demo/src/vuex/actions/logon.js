/**
 * Created by jerry on 2016/10/9.
 */
import API from "../../api"
import * as types from '../mutation-types'

export const userLogin = ({dispatch}, user) => {
    dispatch(types.SET_LOGON_INFO, user);
}