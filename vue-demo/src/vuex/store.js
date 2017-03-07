/**
 * Created by jerry on 16/9/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import fruit from "./modules/fruit"
import logon from "./modules/logon"
import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
    modules: {
        fruit,
        logon
    },
    strict: debug,
    middlewares
})
