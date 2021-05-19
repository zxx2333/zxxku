import Vue from 'vue';

//1.引入路由
import Router from 'vue-router';
// 2. 安装路由
Vue.use(Router);
// console.log(Router);

//4. 定义组件
let yes1 = {template:'<h1>我是大哥</h1>'};
let yes2 = {template:'<h1>我是二哥</h1>'};
let yes3 = {template:'<h1>我是三哥</h1>'};

//5. 创建路由规则
const routes = [
    //静态路由规则,意为：当匹配的路径为“/yes1”时，展示对应的组件就是yes1，name就是一个标识罢了，没什么实际作用
    {path:'/yes1',component:yes1,name:'yes1'},
    //静态路由规则
    {path:'/yes2/:id',component:yes2,name:'yes2'},

    {path:'/yes3',component:yes3,name:'yes3'},
];

//6.创建路由对象,参数是 路由规则对象
const router =  new Router({routes});

const app = new Vue({
    // 7、注册路由
    router:router,
    // 视图
    el: '#app',
    // 数据
    data: {
        
    }
});