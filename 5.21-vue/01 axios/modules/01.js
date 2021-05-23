/*
    axios相当于是 发送ajax请求的模块，在发送ajax请求时可以操作请求的数据等;
    本文件要实现的目的：
        切换组件时，发送不同的请求，根据服务器响应的数据渲染获取的数据
*/
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//1.引入axios
import axios from 'axios';

//自定义组件一
let big = {
    template:`
        <div>
            <h1> 我是大哥 </h1>
            <h1> {{msg}} </h1>
        </div>
    `,
    data(){
        return{
            msg:'Big - msg'
        }
    },
    created(){
        //2. get请求。当切换到此组件时，发送请求，使用数据渲染页面
        axios
        .get('/data/big.json',{
            // puery数据
            params:{
                sex:'nan',
                age:21,
            }
        })
        .then((res) => {
            console.log(res);
            this.msg = res.data.msg
        })
        .catch(err => console.log(err))
    }
};
//自定义组件二
let small = {
    template:`
        <div>
            <h1>我是小弟</h1>
            <h1> {{msg}} </h1>
        </div>
    `,
    data(){
        return {
            msg:'Smlall - msg'
        }
    },
    //post请求
    created(){
        axios
        .post('/data/small.json?name=zhangsan',{xxoo:13579},{
            //设置请求头的格式
            headers:{
                'content-type' : 'application/x-www-from-urlencoded'
            },
            // query数据 -- 默认追加到url部分
            params:{
                name:'azhou',
            }
        })
        //结构响应的数据
        .then( ({data}) => {
            console.log(data);
            this.msg = data.msg
        })
        .catch( err => console.log(err))
    },
};

//路由规则
let routes = [
    {path:'/big',component:big,name:'big'},
    {path:'/small',component:small,name:'small'},
];

//创建路由对象
const router = new Router({
    routes,
});

//Vue实例对象组件
let app = new Vue({
    el:'#app',
    data:{
        msg : '周小贤'
    },
    //注册路由对象
    router:router,
});