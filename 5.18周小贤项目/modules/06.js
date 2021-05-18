// 引入Vue
import Vue from 'vue';

// 声明一个组件
const child = Vue.extend({
    // 模板
    template: '#child',
    // 模型
    data() {
        return {
            msg: 'child component'
        }
    },

});
// 实例化对象
const app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        msg: 'hello'
    },
    // 注册子组件
    components: {child},

})
