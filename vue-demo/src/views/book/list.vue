<!--<style src="bootstrap/dist/css/bootstrap.min.css"></style>-->
<style lang="less">
    @import '../../assets/css/book.less';
</style>
<template>
    <div class="page panel">
        <div class="page__bd">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__hd"><i class="fa fa-list"></i> 书籍列表
                    <a class="weui-btn weui-btn_mini weui-btn_default pull-right" v-link="{name: 'book-set'}">添加</a>
                </div>

                <div class="weui-panel__bd" v-if="books=='' || books.length==0">
                    <div class="weui-media-box weui-media-box_text">
                        <p style="color: red;text-align: center">没有获取到数据</p>
                    </div>
                </div>
                <div class="weui-panel__bd" v-else>
                    <div class="weui-media-box weui-media-box_text" v-for="book in books">
                        <h4 class="weui-media-box__title">《{{book.name}}》
                            <small style="color:#777777;">作者:{{book.author}}</small>
                        </h4>
                        <p class="weui-media-box__desc">{{book.intro}}</p>
                        <div class="weui-media-box__desc">
                            <a class="weui-btn weui-btn_mini weui-btn_primary" v-link="{name: 'book-set',query:{id:book.id}}">修改</a>
                            <a class="weui-btn weui-btn_mini weui-btn_warn" v-on:click.stop.prevent="delBook(book)">删除</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <alert :show.sync="msgshow" title="" button-text="确定">
        <p style="text-align:center;">{{msgtext}}</p>
    </alert>
    <confirm :show.sync="confirmshow" confirm-text="确定" cancel-text="取消" title="操作提示"
             @on-confirm="onAction(curbook)">
        <p style="text-align:center;">确定删除吗?</p>
    </confirm>
</template>

<script>
    import {API_ROOT} from '../../config/index.js'
    import Alert from 'vux/dist/components/alert'
    import Confirm from 'vux/dist/components/confirm'

    export default {
        components:{
            Alert,
            Confirm
        },
        ready () {
            this.$http.get(API_ROOT+'/book/search')
            .then(function(response) {
                this.$set('books', response.data);
            },function(response){
                console.log('fail' + status + "," + request);
            });
        },
        data () {
            return {
                books:'',
                curbook:null,
                confirmshow:false
            }
        },
        methods: {
            delBook:function (book) {
                this.$set('curbook', book);
                this.$set('confirmshow', true);
            },
            onAction: function (book) {
                this.$http.get(API_ROOT+'/book/delete?id=' + book.id)
                    .then(function (response) {
                        var data = response.data;
                        if (data && data.err_code == 0) {
                            this.books.$remove(book);
                        } else {
                            this.$set('msgtext',data.err_msg);
                            this.$set('msgshow',true);
                        }
                },function(response) {
                    console.log('fail' + response.status);
                    this.$set('msgtext','删除失败');
                    this.$set('msgshow',true);
                })
            }
        }
    }
</script>