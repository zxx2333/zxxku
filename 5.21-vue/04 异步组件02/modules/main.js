// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App';

// 第二种异步操作方式1.1
const child = () => import('./Child');
// 全局注册 1.2
Vue.component('child',child);

//动态改变组件的写法
// let name = 'App';
// Vue.component('abc', () => import(`./${name}`));

const app = new Vue({
    render:(h) => {
        return h(App);
    }
}).$mount('#app');