<template>
    <div>
        <h1> App </h1>
        <hr>
        <child></child>
        <!-- <demo></demo> -->
    </div>
</template>

<script>
import Vue from 'vue';

//第一种方式实现异步加载
Vue.component('child', () => new Promise((resolve,reject) => {
    //使用延时器模拟异步操作
    setTimeout( () => {
        console.log('异步操作执行了');
        resolve({
            template:`<h1>settimeout-child</h1>`,
        })
    },4000);
} ))

export default {
    data(){
        return{
            msg : 'App-msg'
        }
    },
    components:{
        // child:Child,
        // demo:Demo
    }
}
</script>

<style >
    
</style>