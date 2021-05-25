import Vue from 'vue';
import Vuex from 'vuex';

//安装
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        title:'title周小贤'
    }
});

//向外暴露接口
export default store;