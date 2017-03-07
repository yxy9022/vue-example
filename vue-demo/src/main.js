/**
 * Created by jerry on 16/9/27.
 */
import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Routers from './router';
import Env from './config/env';
import 'font-awesome/css/font-awesome.min.css';

//import 'bootstrap/dist/css/bootstrap.css'
//import "bootstrap/dist/js/bootstrap.min.js"

import Loading from 'vux/dist/components/loading'
Vue.component('loading',Loading);


Vue.use(VueResource);
Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;


Vue.http.headers.common['x-access-token'] = localStorage.getItem('token')?localStorage.getItem('token'):'';

//Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push(function(request,next){
    console.log('----开始---'); //改成这样就可以了，谢谢楼上
    //console.log(request);
    //var token = localStorage.getItem('token');
    //request.headers['x-access-token'] = token;
    //request.header.comm
    //app.$set('showLoading', true);
    //appActions.setLoading(true);
    //App.$set('showLoading',true);
    //console.log(this) //改成这样就可以了，谢谢楼上
    //showLoading.showLoading = false;
    next(function (response) {
        //console.log(JSON.stringify(response.data));
        //if(response.data )
        //if({"err_code":40001,"err_msg":"token不存在"})
        //this.showLoading = false;  //此处的this是正确的
        console.log('----之后---');
        if(response.data && response.data.err_code==40001){
            console.log('---ss--');
            this.$route.router.go('/logon');
            return;
        }
        return response;
    })
});

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    //history: Env != 'production'
    hashbang: false,
    history: true,  //html5模式 去掉锚点
    saveScrollPosition: true, //记住页面的滚动位置 html5模式适用
    transitionOnLoad: true
});

router.map(Routers);

router.beforeEach((transition) => {
    //var username = localStorage.getItem('username');
    //console.log('---username-----');
    //console.log(username);
    //if(transition.to.path=='/logon'){
    //    transition.next();
    //}else {
    //    if (username && username != '') {
    //        transition.next();
    //    } else {
    //        transition.redirect('/logon');
    //    }
    //}
    transition.next();
});

router.afterEach(() => {

});

router.start(App, '#app');