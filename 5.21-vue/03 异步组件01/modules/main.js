// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App';

const app = new Vue({
    render:(h) => {
        return h(App);
    }
}).$mount('#app');