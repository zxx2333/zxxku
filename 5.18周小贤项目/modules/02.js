/*
    子组件向父组件传递数据：
        通过自定义事件传递数据
    1. 给父组件元素里定义自定义事件
    2. 在父组件的js代码里绑定$on()方法
    2. 在子组件中触发事件 this.$parent.$emit() 也就是传递数据
*/
import Vue from 'vue';

const child = Vue.extend({
    template:`
    <div>
        <hr>
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
    </div>
    `,
    //模型
    data(){
        return {
            msg:'child msg'
        }
    },
    created(){
        this.$parent.$emit('demo','你像窝在被子里的舒服')
    }
})


let app = new Vue({
    el:'#app',
    data:{
        msg:''
    },
    created(){
        this.$on('demo',(arg) => {
            console.log(arg);
            this.msg = arg
        })
    },
    components:{
        child,
    }
})