<template>
    <div class="page panel">
        <div class="page__bd">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__bd">
                    <search @on-submit="getList" @input="update" @keyup.enter="getList"
                            :auto-fixed="false" :value.sync="searchKey"
                            required="false" placeholder="搜索关键字..."></search>
                </div>
                <div class="weui-panel__hd"><i class="fa fa-list"></i> 水果列表</div>

                <div class="weui-panel__bd" v-if="fruits=='' || fruits.length==0">
                    <div class="weui-media-box weui-media-box_text">
                        <p style="color: red;text-align: center">没有获取到数据</p>
                    </div>
                </div>
                <div class="weui-panel__bd" v-else>
                    <div class="weui-media-box weui-media-box_text" v-for="fruit in fruits">
                        <h4 class="weui-media-box__title">{{fruit.name}}
                            <span style="color:lightseagreen;">{{fruit.englishname}}</span>
                        </h4>
                        <p class="weui-media-box__desc">{{fruit.effect}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <toast :show.sync="toastInfo.show" :type.sync="toastInfo.type" width="10em" :text.sync="toastInfo.text" ></toast>
</template>

<script>
    import {searchFruitList,updateFruitSearchKey}  from '../../vuex/actions/fruit'
    import {searchKey,isEmptySearchKey} from '../../vuex/getters/fruit'
    import Search from 'vux/dist/components/search'
    import Toast from 'vux/dist/components/toast'
    import {API_ROOT} from '../../config/index.js'

    export default {
        components:{
            Search,
            Toast
        },
        data(){
            return {
                toastInfo:{
                    show:false,
                    type:"warn",
                    text:''
                }
            }
        },
        ready () {
            this.getList();
        },
        vuex: {
            getters:{
                searchKey,
                isEmptySearchKey,
                fruits: ({ fruit }) => fruit.searchResultList,
            },
            actions: {
                searchFruitList,
                updateFruitSearchKey
            }
        },
        methods:{
            getList(){
//                var _this = this;
                // HTTP相关
                this.$http.post(API_ROOT + '/fruit/search',{key:this.searchKey})
                    .then(function (response) {
                        //success callback
                        console.log('--response success--');
                        var data = response.data;

                            this.searchFruitList(data);

                    }, function (response) {
                        // error callback
                        this.toastInfo.show = true;
                        this.toastInfo.text = '获取数据出现错误';
                    });
            },
            update(e){
                this.updateFruitSearchKey(e.target.value)
            }
        }
    }
</script>