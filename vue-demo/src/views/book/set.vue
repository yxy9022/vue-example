<style scoped>
    .book-title{
        width: auto;
        padding-right:10px;
        color: #333;
    }
</style>
<template>
    <div class="page">
        <div class="page__bd">
            <div class="weui-cells__title"><i class="fa fa-book"></i>
                <b v-show="isEdit"> 修改书籍</b><b v-show="!isEdit"> 添加书籍</b>
            </div>
            <div class="weui-cells cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label book-title">书名</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="book.name" placeholder="请输入书名">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label book-title">作者</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="book.author" placeholder="请输入作者">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label book-title">简介</label></div>
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" v-model="book.intro" placeholder="请输入简介" rows="6"></textarea>
                    </div>
                </div>

            </div>
            <div style="padding: 10px;">
                <button class="weui-btn weui-btn_primary" v-on:click.stop.prevent="setBook()">提交</button>
            </div>
        </div>
    </div>
    <alert :show.sync="msgshow" title="" button-text="确定">
        <p style="text-align:center;">{{msgtext}}</p>
    </alert>
</template>
<script type="text/ecmascript-6">
    import {API_ROOT} from '../../config/index.js'
    import Alert from 'vux/dist/components/alert'
    export default {
        components:{
          Alert
        },
        ready () {
            var id = this.$route.query.id;
            if(id) {
                this.$http.get(API_ROOT+'/book/get?id='+id)
                .then(function(response) {
                    var data = response.data;
                    if(data && data.id) {
                        this.$set('isEdit',true);
                        this.$set('book', data);
                    }
                },function(response){
                    console.log('fail' + response.status);
                })
            }
        },
        data () {
            return {
                isEdit:false,
                msgshow:false,
                msgtext:'',
                book: {
                    id:'',
                    name: '',
                    author: '',
                    intro:''
                }
            }
        },
        methods: {
            setBook: function () {
                if (this.book.name == '' || this.book.author == '') {
                    this.$set('msgtext','数据不能为空');
                    this.$set('msgshow',true);
                    return;
                }
                this.$http.post(API_ROOT+'/book/set', this.book)
                .then(function (response) {
                    var data = response.data;
                    if(data && data.err_code==0){
                        if (this.isEdit) {
                            this.$set('msgtext', '修改成功');
                            this.$set('msgshow', true);
                        } else {
                            this.$set('msgtext', '添加成功');
                            this.$set('msgshow', true);
                        }

                    }else {
                        this.$set('msgtext', data.err_msg);
                        this.$set('msgshow', true);
                    }
                },function(response){
                    this.$set('msgtext','处理失败');
                    this.$set('msgshow',true);
                })
            }
        }
    }
</script>