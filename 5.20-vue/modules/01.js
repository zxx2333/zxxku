import Vue from 'vue';

//1.引入模块
import Router from 'vue-router'

//2.安装
Vue.use(Router);

//3.自定义组件
let one = {
    template: `
    <div>
        <h1>first</h1>
        <h2>name: {{$route.fullPath}}</h2> 
    </div>
    `,
};
let two = {
    template: `
        <div>
            <h1>second</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
};
let three = {
    template: `
        <div>
            <h1>three</h1>
            <h2>fullPath:{{fullPath}}----name:{{name}}</h2>
        </div>
    `,
    props:['fullPath','name']
};

//4. 路由规则
let routes = [
    {path:'/one',component:one,name:'one',},
    {
        path:'/two:id',component:two,name:'two',
        props:true,
    },
    {
        path:'/three',component:three,name:'three',
        porps(route){
            let {fullPath,name} = route;
            return {fullPath,name};
        }
    },
    //重定向
    {
        path:'/two',redirect:'/two/a',
    },
    //默认路由
    {
        path:'*',component:{template:`<h1>默认路由</h1>`},name:'default',
    }

];

//5.创建router对象
let router = new Router({
    routes,
});

let app = new Vue({
    el:'#app',
    data:{
        msg:'哈哈'
    },
    //注册路由
    router
})