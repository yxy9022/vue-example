<style>
    @import '~weui/dist/style/weui.min.css';
    @import '~vux/dist/vux.css';
</style>
<style lang="less">
    @import './assets/css/base.less';
</style>
<template>
    <div class="container" id="container" style="background: white;">
        <my-header></my-header>
        <router-view></router-view>
        <loading :show.sync="showLoading"></loading>
    </div>
</template>
<script type="text/ecmascript-6">
    //在根组件加入 store，让它的子组件和 store 连接
    import store from './vuex/store'
    import myHeader from './components/common/header.vue'

    export default {
        store: store,
        data(){
            return {
                showLoading:false
            }
        },
        components: {
            myHeader
        }
    }
</script>