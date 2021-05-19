/*
    子组件向父组件传递数据
        1.在子组件的元素标签里定义自定义事件,并设置对应的函数处理
        2.在子组件的js代码中触发自定义事件，会自动触发自定义事件后面的函数
*/
import Vue from 'vue';

const child = Vue.extend({
    template:`
    <div>
        <h1>子组件</h1>
        <h2>{{msg}}</h2>
        <input type="text" v-model="msg">
    </div>
    `,
    data(){
        return{
            msg:'天青色等烟雨'
        }
    },
    created(){
        this.$emit('demo',this.msg);
    },
    watch:{
        msg(value){
            // this.msg = value;
            this.$emit('demo',this.msg);
        }
    }
})

let app = new Vue({
    el:'#app',
    data:{
        msg:"",
    },
    methods:{
        yes(arg){
            console.log(111,arg);
            this.msg = arg
        }
    },
    components:{
        child
    }
})