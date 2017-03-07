<template>
    <div class="page">
        <div class="page__hd">
            <h1 class="page__title" style="padding-left: 15px;">{{welcome}}</h1>
        </div>
        <div class="page__bd">
            <div class="weui-cells__title">开发demo</div>
            <div class="weui-cells">
                <a v-link="{ name: 'book-list'}" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vue+vue-router+vux</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a v-link="{ name: 'fruit-list'}" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vue+vue-router+vuex+vux</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
            </div>
        </div>

        <div class="page__bd">
            <div class="weui-cells__title">参考文档</div>
            <div class="weui-cells">
                <a target="_blank" href="http://cn.vuejs.org" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vue 中文指南</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a target="_blank" href="http://vuejs.org" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vue 英文官网</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a target="_blank" href="http://webpackdoc.com" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>Webpack 中文指南</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>

                <a target="_blank" href="http://router.vuejs.org/zh-cn/index.html" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vue-router 中文文档</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
                <a target="_blank" href="http://vuex.vuejs.org/en/index.html" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vuex 文档</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>

                <a target="_blank" href="https://vuxjs.gitbooks.io/vux/content/" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vux 中文文档</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>

                <a target="_blank" href="https://vux.li/#!/demo" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>vux 演示地址</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>


                <a target="_blank" href="https://www.talkingcoder.com/article/6309726065044556372" class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">
                        <p>Vue+Webpack 使用规范</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </a>
            </div>
        </div>

    </div>
    <div style="padding: 10px;">
        <button class="weui-btn weui-btn_mini weui-btn_primary" @click="sayHi">{{clickme}}</button><br><br>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        ready: function() {
            this.username = localStorage.getItem('username')
        },
        data () {
            return {
                welcome:'Hello Vue!',
                clickme:'点击我',
                username:''
            }
        },
        methods: {
            sayHi: function () {
                alert('Hello Vue!')
            }
        }
    }
</script>
<style scoped>
    h1{
        color: #28a7e1;
        font-size: 25px;
        font-weight: bold;
        margin-top: 20px;
    }
    h2{
        font-size: 20px;
        margin-top: 20px;
    }
    img{
        width: 150px;
    }
</style>
