// 引入Vue
import Vue from 'vue';
// 引入Vuex 
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        num:0,
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
    //分割state
    modules:{
        //键为自定义名称，值是 store对象的值
        yes:{
            state:{
                num:999,
            },
            getters:{
                newdoublenum(state){
                    return state.num * 3;
                }
            },
        }
    }
});

// 声明子组件
let child = Vue.extend({
    template: '#child',


})
// 声明子组件
let other = Vue.extend({
    template: '#other',

})

// 构建应用
const app = new Vue({
    // 注册store对象
    store,
    // 视图
    el: '#app',
    // 数据
    data: {
        num: 1
    },
    // 注册组件
    components: {child, other},
    // 创建完毕
    created() {
        console.log('app', this);
    }
})