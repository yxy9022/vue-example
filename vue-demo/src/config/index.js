/**
 * Created by jerry on 16/9/27.
 */
import Env from './env';

let api_address;
//export const API_ROOT = (Env === 'production') ?'http://vue.ihejun.com/api' :'http://127.0.0.1:8500/api';
if(Env === 'production'){
    //发布正式
    api_address = 'http://vue.ipyro.cn/api';
}else if(Env === 'development'){
    //本地前端开发环境
    // 这里使用http://vue.ipyro.cn/api目的是在未启动vue-deom-server时也能访问
    // 实际开发中这个地址建议改成本地的：http://127.0.0.1:8500/api，
    api_address = 'http://vue.ipyro.cn/api';
}else if(Env === 'severdevelop'){
    //本地后端开发环境
    api_address = 'http://127.0.0.1:8500/api';
}

export const API_ROOT = api_address;