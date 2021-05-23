import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

let first = {
    template: `
        <div class="a">
            <h1>one</h1>
            <h2>name: {{$route.fullPath}}</h2> 
        </div>
    `,
    // //第二种. 局部路由守卫
    // beforeRouteEnter(to,from,next){
    //     console.log('局部监听')
    //     next();
    // }
};
let second = {
    template: `
        <div>
            <h1>two</h1>
            <hr>
            <!--子路由的渲染位置-->
            <router-view></router-view>
        </div>
    `,
};
let three = {
    template: `
        <div>
            <h1>twoA</h1>
        </div>
    `,
};

let routes = [
    {path:'/one',component:first,name:"one"},
    {
        path:'/two',component:second,name:"two",
        children:[
            { path:'/two/a',component:three,name:"twoA"}
        ]
    }
];

let router = new Router({
    routes,
});

let app = new Vue({
    el:'#app',
    router:router,
    // //第三种，通过watch监听 $route 变化
    // watch:{
    //     $route(to,from){
    //         console.log('ok')
    //     }
    // }
});

//第一种：全局路由守卫
router.beforeEach((to,from,next) => {
    console.log('全局监听路由切换')
    next();
});