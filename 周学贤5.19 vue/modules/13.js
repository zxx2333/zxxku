import Vue from 'vue';

// 创建组件
let header1 = Vue.extend({
    template: '#header',
});
let main1 = Vue.extend({
    template: '#main',
});
let footer1 = Vue.extend({
    template: '#footer',
});

let app = new Vue({
    el:'#app',
    data: {
        flag: 'header1'
    },
    components:{
        header1,main1,footer1,
    }
});

let router = () => {
    console.log(location.hash.slice(2));
    app.flag = location.hash.slice(2);
}
window.addEventListener('hashchange', router);
router();