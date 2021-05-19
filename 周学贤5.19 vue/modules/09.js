/*
    getter:
        对象形式。
        key 表示 具体数据的名称,自定义
        value 表示 计算数据的函数
*/
import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    //存储的静态数据
    state:{
        msg:'i love you',
        num : 0,
    },
    //存储的动态数据
    getters:{
        doublenum(state){
            return state.num * 3;
        }
    },
    // 同步消息方法
    mutations:{
        // +3
        addnum(state) {
            state.num += 3;
        },

    },


});


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
    //注册到vue实例对象中
    store:store,

    el:'#app',
    data:{

    },
    components:{
        child,
        other,
    },
    methods:{
        // db(){
        //     // this.$store.commit('doublenum');
        // },
        //触发同步方法
        addnum(){
            //发布，触发消息。使用commit方法触发同步消息
            this.$store.commit('addnum',[1,3,5,7,9]);
        },
    },
});