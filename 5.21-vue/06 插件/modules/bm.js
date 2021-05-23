//自定义插件

//方式一
// export default function(Vue){
//     //vue自动设置第一个参数为 Vue实例对象
//     console.log(Vue);
// }

//引入axios
import axios from 'axios';

//方式二
export default {
    install(Vue,...arg){
        //给Vue实例对象添加一个属性
        Vue.zxx = 'ahhhh';
        //给Vue实例对象添加一个指令
        Vue.directive('bm',function(){
            console.log('成功调用了此指令');
        });
        //给Vue实例对象添加一个过滤器方法
        Vue.filter('yes',function(){
            return '你好啊' + arg[0]
        });
        //安装axios
        Vue.prototype.$http = axios;
    }
}