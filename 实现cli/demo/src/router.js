import Router from 'vue-router';
import Vue from 'vue';
import Home from '@/view/Home';
import About from '@/view/About';

//安装
Vue.use(Router);

const routes = [
    {path:'/',component:Home},
    {path:'/About',component:About}
]

// 第四步：获得router对象
const router = new Router({routes})

//向外暴露接口
export default router;