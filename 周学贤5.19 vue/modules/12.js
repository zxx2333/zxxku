import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);


let store = new Vuex.Store({
    state:{
        num:0,
    },
    getters:{
        doublenum(state){
            return state.num * 2;
        }
    },
    mutations:{
        setnum(state,v){
            state.num = v;
        }
    }
});

// 声明两个子组件
let child = Vue.extend({
    template: '#child',
})

let app = new Vue({
    store,
    // 视图
    el: '#app',
    // 数据
    data: {
    },
    // 注册组件
    components: {child},
    //计算属性数据
    computed:{
        num:{
            get(){
                return this.store.state.num;
            },
            set(val){
                this.store.commit('setnum',v)
            }
        }
    },
})