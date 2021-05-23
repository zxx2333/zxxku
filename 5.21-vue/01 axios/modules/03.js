/**
 *  在本地服务器中请求数据，向本地服务器请求数据，请求本地的数据方式
 * 
 */
import Vue from 'vue';

import axios from 'axios';

Vue.prototype.$http = axios;

let app = new Vue({
    el:'#app',
    data:{
        msg:'周小贤'
    },
    created(){
        this.$http
        // .get('/data/xxoo.json')
        .get('/data/zxx') //所以，这里为什么要请求一个不存在的地址？
        .then((res) => {
            console.log('App--->',res);
        })
        .catch(err => {
            console.log(err);
        });
    }
});