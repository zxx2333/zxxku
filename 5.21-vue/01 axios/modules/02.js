import Vue from 'vue';

//1.引入axios
import axios from 'axios';

//引入子组件
import child from './child';

//2.安装axios
Vue.prototype.$http = axios;

let app = new Vue({
    el:'#app',
    data:{
        msg:'',
    },
    components:{
        child,
    },
    created(){
        console.log('App',this);

       this.$http
        .get('/data/big.json',{
            // puery数据
            params:{
                sex:'nan',
                age:21,
            }
        })
        .then((res) => {
            console.log('App:',res);
            this.msg = res.data.msg
        })
        .catch(err => console.log(err))
    },
});