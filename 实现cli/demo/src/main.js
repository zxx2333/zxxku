import Vue from 'vue';
import App from '../src/App';
import router from '@/router';
import store from '@/store';

//vue实例对象
new Vue({
    router,
    store,
    render:h => h(App)
}).$mount('#app');