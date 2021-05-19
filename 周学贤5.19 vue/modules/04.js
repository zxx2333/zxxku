/*
    子组件向父组件传递数据
    传递方法
    1. 在子组件元素写自定义属性 <child :attr="baga"></child>
    2. 在父组件的js代码里定义函数baga，
    3. 在子组件中接收数据，接收的数据就成为了子组件自身的属性
    4. 调用传递来的方法, this.attr(参数)
    5. 父组件的baga方法的参数就会接收到数据
*/
import Vue from 'vue';

let child = Vue.extend({
    //接收
    props:['attr'],
    template:`
        <div>
            <h1>子组件</h1>
            <h2>{{msg}}</h2>
        </div>
    `,
    data(){
        return {
            msg:'子组件里的数据',
        }
    },
    created(){
        this.attr(this.msg);
    }
})

let app = new Vue({
    el:'#app',
    data:{
        msg:'',
    },
    components:{
        child,
    },
    methods:{
        baga(arg){
            console.log(arg);
            this.msg = arg
        }
    }
});