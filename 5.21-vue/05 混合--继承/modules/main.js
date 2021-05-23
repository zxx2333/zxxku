import Vue from 'vue';

import App from './App';

//全局混合-继承,所有的组件都会拥有这里所设置的方式，除了自定义的
// Vue.mixin({
//     //当前这个对象就相当于是 自定义组件对象

//     //与组价不相干的属性就不会被继承
//     xxoo:'ooxx',
//     say(){
//         return 'i can say'
//     },

//     //数据
//     data(){
//         return {
//             msg:'mixin-msg',
//             num: 10,
//         }
//     },
//     created(){
//         console.log(this);
//     }
// });

const app = new Vue({
    render: h => h(App)
}).$mount('#app');