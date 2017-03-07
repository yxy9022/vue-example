<template>
    <div class="page">
        <div class="page__bd">
            <div class="weui-cells__title"><i class="fa fa-user"></i>
                <b> 用户登录</b>
                <span>用户名：abc 密码：1</span>
            </div>
            <div class="weui-cells cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label" style="width: auto;padding-right:10px;">账号</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="username" placeholder="请输入账号">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label" style="width: auto;padding-right:10px;">密码</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" v-model="pwd" placeholder="请输入密码">
                    </div>
                </div>
            </div>
            <div style="padding: 10px;">
                <button class="weui-btn weui-btn_primary" v-on:click.stop.prevent="login()">提交</button>
            </div>
        </div>
    </div>
    <toast :show.sync="toastInfo.show" :type.sync="toastInfo.type" width="10em" :text.sync="toastInfo.text" ></toast>
</template>
<script>
    import store from '../vuex/store';
    import * as actions from '../vuex/actions/logon'
    import {isLogin,userInfo} from '../vuex/getters/logon'
    import Toast from 'vux/dist/components/toast'
    import API from '../api'

    export default {
        components:{
            Toast
        },
        data () {
            return {
                username:'',
                pwd:'',
                toastInfo:{
                    show:false,
                    type:"warn",
                    text:''
                }
            }
        },
        vuex: {
            getters:{
                isLogin,
                userInfo
            },
            actions: {
                userLogin: actions.userLogin
            }
        },
        methods:{
            login(){
                var _this = this;
                API.login({username:this.username,pwd:this.pwd})
                .then(function(response){
                    var data = response.data;
                    if(data.err_code){
                        _this.toastInfo.show = true;
                        _this.toastInfo.text = data.err_msg;
                    }else {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('username', data.user.username);
                        window.location.href = '/';
                    }
                },function(response){
                    // error callback
                    _this.toastInfo.show = true;
                    _this.toastInfo.text = response.statusText;
                })
            }
        }
    }
</script>