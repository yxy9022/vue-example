同学们注意啦,此vue-demo项目是基于vue1.0开发的

效果演示地址: http://vue.ipyro.cn

有需要的同学注意看此demo开发相关说明：

1、下载工程。此demo分前端和后端，要结合起来开发。
https://github.com/jerry9022/vue-example

工程目录结构如下：
vue-example
            ├─ vue-demo  #前端工程
            │
            ├─ vue-server-demo #后端工程

2、初始化说明。
vue-demo工程下初始化相关组件，执行命令：
> cd vue-demo
> npm install #安装node_modules
> npm run init  #生成index.html页面

vue-demo-server工程下初始化相关组件，执行命令：
> cd vue-demo-server
> npm install #安装node_modules

3、相关地址说明：
(1) vue-demo开发环境访问地址: http://127.0.0.1:8080
(2) vue-server-demo开发环境访问地址: http://127.0.0.1:8500
(3) vue-server-demo生产环境访问地址: http://vue.ipyro.cn
(4) vue-demo访问后端接口地址。
    可以到 /src/config/index.js中去配置。
    开发环境：http://127.0.0.1:8500/api
    生产环境：http://vue.ipyro.cn/api

4、项目启动及发布：
（1）vue-demo启动.
    命令行中执行：
     cd vue-demo
     npm run dev #没报错的话就可以通过http://127.0.0.1:8080访问了
 (2)vue-demo-server启动。
    配置后端数据库使用的mysql。
    命令行中执行：
    cd vue-demo
    npm run sdev
    npm run server
    #没报错的话就可以通过http://127.0.0.1:8500/api访问了服务端接口了。


（3）vue-demo-server发布。
    在vue-demo项目中命令行中执行：npm run build
    如果没报错的话可看到vue-demo-server/public/dist目录下文件和index.html文件更新了。

    发布vue-demo-server.
