/**
 * Created by jerry on 16/9/29.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config/index.js'

Vue.use(VueResource);
// HTTP相关
// Vue.http.options.crossOrigin = true
//export const searchFruitList = function(options,fn){
//    Vue.http.post(API_ROOT + '/fruit/list',options).then(function (response) {
//        // success callback
//    }, function (response) {
//        // error callback
//    });
//};

export const login = (options) => Vue.http.post(API_ROOT + '/logon',options);