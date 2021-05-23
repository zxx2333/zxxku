import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router)

let one = {
    template: `
        <div>
            <h1>one</h1>
            <h2>name: {{$route.fullPath}}</h2> 
        </div>
    `,
};

let two = {
    template: `
        <div>
            <h1>two</h1>
            <h2>id:{{id}}</h2>
        </div>
    `,
    props: ['id'],
};

let three = {
    template: `
        <div>
            <h1>three</h1>
            <hr>
            <!--子路由的渲染位置-->
            <router-view></router-view>
        </div>
    `,
    props: ['fullPath', 'name'],
};

let threeI = {
    template:`
        <div>
            <h1>threeI </h1>
            <h1> {{name}} </h1>
        </div>
    `,
    //接收数据
    props:['name'],
};
let threeO = {
    template:`
    <div>
        <h1> threeO </h1>
        <h1> {{name}} </h1>
    </div>
    `,
    props:['name'],

}

let routes = [
    { path: '/one', component: one, name:'first' },
    { 
        path: '/two/:id', component: two, name:'second',
        // 设置props
        props: true, 
    },
    {
        path: '/three', component: three, name:'three',
        // props方法，返回值为对象
        props(route) {
            let {fullPath, name} = route;
            return {fullPath, name}
        },
        //定义子路由
        children:[
            //相对路径
            {
                path:'I',component:threeI,name:'threeI',
                //传递数据
                props(route){
                    return {
                        name : route.name,
                    }
                }
            },
            //绝对路径
            {path:'/O',component:threeO,name:'threeO',                //传递数据
            props(route){
                return {
                    name : route.name,
                }
            }},
        ]
    },
    // 重定向
    { path: '/two', redirect: '/two/xxoo' }, 
    // 定义一个默认路由
    {path: '*', component: {template: '<h1>默认路由</h1>', name: 'default'}}
];

let router = new Router({
    routes
});

let app = new Vue({
    el:'#app',
    router,
})