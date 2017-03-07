/**
 * Created by jerry on 16/9/27.
 */
const routers = {
    '/': {
        name:'home',
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/logon':{
        name:'logon',
        component (resolve) {
            require(['./views/logon.vue'], resolve);
        }
    },
    '/book/list':{
        name:'book-list',
        component: function(resolve){
            require(['./views/book/list.vue'],resolve);
        }
    },
    '/book/set':{
        name:'book-set',
        component: function(resolve){
            require(['./views/book/set.vue'],resolve);
        }
    },
    '/fruit/list':{
        name:'fruit-list',
        component: function(resolve){
            require(['./views/fruit/list.vue'],resolve);
        }
    },
    '*': {
        name:'404',
        component (resolve) {
            require(['./views/404.vue'], resolve);
        }
    }
};
export default routers;