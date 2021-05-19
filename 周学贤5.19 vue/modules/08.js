/*
    使用vuex
        1. 引入
        2. 安装，挂载
        3. 创建store对象
        4. 在vue实例对象中注册
*/

import Vue from 'vue';

//1. 引入Vuex
import Vuex from 'vuex';

//2. 安装，挂载
Vue.use(Vuex);

//3.创建store实例对象，并创建store的各个部分
let store = new Vuex.Store({
    //创建store的各个部分

    //存储数据
    state:{
        msg:'this is store',
        num :0,
    },

    //同步消息，作用就是修改数据
    mutations:{
        // num + 3
        addnum(state,arg){
            state.num += 3;
            // console.log(state,arg);
        },
        //将数据清零
        resetnum(state){
            state.num = 0;
        }
    },

    //异步消息
    actions:{
        resetnum(store,arg){
            setTimeout( () => {
                //因为异步不能修改数据，所以只能调用commit来修改数据
                store.commit('resetnum');
            } ,3000);
        }
    },  
});
console.log(store);

//子组件一号
let child = Vue.extend({
    template: '#child',
    data(){
        return {
            msg:'组件一号'
        }
    },
    created() {
        console.log('child', this);
    },
});

//子组件二号
let other = Vue.extend({
    template:'#other',
    data(){
        return {
            msg:'组件二号'
        }
    },
    created() {
        console.log('other', this);
    },
});

let app = new Vue({
    //4. 注册store对象
    store:store,

    el:'#app',
    data:{
        num:1,
        msg:'父组件'
    },
    //注册组件
    components:{
        child:child,
        other:other,
    },
    methods:{
        //触发同步方法
        addnum(){
            //发布，触发消息。使用commit方法触发同步消息
            this.$store.commit('addnum',[1,3,5,7,9]);
        },
        // 触发异步消息
        resetnum(){
            //使用dispath方法触发异步消息
            this.$store.dispatch('resetnum',[2,4,6,8])
        }
    },
    created(){
        console.log('app',this);
    }
});