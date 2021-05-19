import Vue from 'vue';

import Router from 'vue-router'

Vue.use(Router);

let yes1 = {
    template:'#first',
    created(){
        console.log('first',this);
    }
}
let yes2 = {
    // //2.接收props传递来的数据(注意，此处组件是接收的是动态的路由数据)
    // props:['id'],
    
    //2.接收数据,此组件就可以直接使用这些属性数据
    props: ['name','id', 'fullPath', 'sex', 'hash'],

    template:'#second',
    created(){
        console.log('second',this);
    }
}
let yes3 = {
    template: "<h1>footer</h1>" ,
    created(){
        console.log('three',this);
    }
};

const routes = [
    {name:'mingzi1',path:'/first',component:yes1},
    {
        name:'mingzi2',
        path:'/second/:id',
        component:yes2,
        // //1. props 定义要传输的数据,此处是动态路由，只会传递动态路由参数
        // props:true,
    },
    {
        name:'mingzi3',
        path:'/three',
        component:yes3,
        //1.定义传递的数据,参数zxx代表了route对象
        props(zxx){
            return{
                name: zxx.name,
                id: zxx.params.id,
                fullPath: zxx.fullPath,
                sex: zxx.query.sex,
                hash: zxx.hash            
            }
        }
    },

];

let router = new Router({routes});

let app = new Vue({
    router,
    el:'#app',
    data:{
        
    },
    created(){
        console.log('app',this);
    }
});