import Vue from 'vue';

import Router from 'vue-router';

import '../scss/05.scss'

Vue.use(Router);

let one = {
    template:`
        <div>
            <h1>one</h1>
        </div>
    `
};
let two = {
    template:`
        <div>
            <h1>two</h1>
            <hr>
            <router-view></router-view>
        </div>
    `
};
let twoa = {
    template:`
        <div class="twoa">
            <h1>twoA</h1>
        </div>
    `
};
let twob = {
    template:`
        <div class="twob">
            <h1>twoB</h1>
        </div>
    `
};
let routes = [
    {
        path:'/one',component:one,name:'one',
    },
    {
        path:'/two',component:two,name:'two',
        children:[
            {path:'a',component:twoa,name:'twoa'},
            {path:'/b',component:twob,name:'twob'}
        ]
    }
];

let router = new Router({
    routes,
    //监听滚动条事件
    scrollBehavior(to,from,scrollobj){
        /*
            to:表示当前的路由对象
            from：表示上一个路由对象
            scrollobj：表示上一个路由对象的滚动条位置参数
        */
    //    if(to.name == 'twoa'){
    //     return {
    //         x : 0,
    //         y : 100,
    //     }
    //    }
    },
    //切换路由策略
    // mode:'history',
    mode:'hash',
});

let app = new Vue({
    el:'#app',
    router:router,
    
});