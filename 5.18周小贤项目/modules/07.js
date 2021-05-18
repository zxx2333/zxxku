import Vue from 'vue';

const child = Vue.extend({
    template:'#tpl',
    data(){
        return {
            msg:'子组件 啊啊啊啊啊啊啊啊啊啊啊啊啊',
            title:'子组件 title'
        }
    }
})

let app = new  Vue({
    el:'#app',
    data:{
        msg:'父组件 msg'
    },
    components:{child}
})