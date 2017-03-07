<template>
    <div class="page">
        <div class="header">
            <img class="logo" src="../../assets/images/logo.png">
            <button v-on:click.stop.prevent="logout()" class="pull-right weui-btn weui-btn_mini" v-show="isLogin">注销</button>
            <span class="pull-right" style="padding-right: 15px;">{{username}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        ready(){
            this.username = window.localStorage.getItem('username');
            if(this.username && this.username!=''){
                this.isLogin = true;
            }
        },
        data (){
            return {
                isLogin:false,
                username: ''
            }
        },
        methods: {
            logout: function () {
                window.localStorage.setItem('username','');
                window.localStorage.setItem('token','');
                window.location.href = '/';
            }
        }
    }
</script>
