/*
    兄弟组件传递数据
    子 --> 父 --> 子
    子传父，父接收，父传子
    大哥组件传给父组件，父组件传给老弟组件
*/


import Vue from 'vue';

// 大哥组件
const big = Vue.extend({
    props:['demo'],
    template:'#bigborder',
    data(){
        return {
            msg:'我是大哥组件'
        }
    },
    created(){
        // console.log(1111111,this.demo);
        this.demo(this.msg);
    },
    watch:{
        msg(val){
            this.demo(val)
        }
    }
});

//老弟组件
const small = Vue.extend({
    props:['abc'],
    template:'#smallborder',
});


///老爹组件
let app = new Vue({
    el:'#app',
    data:{
        msg:'我是父组件'
    },
    components:{
        bigborder:big,
        smallborder:small
    },
    methods:{
        fn(val){
            //父组件
            console.log('父组件接收到的数据：',val);
            //将数据传给老弟组件
            this.msg = val;
        }
    },

});