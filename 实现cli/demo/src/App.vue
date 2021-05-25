<template>
  <div>
      <h1>App</h1>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/view/Home';
import About from '@/view/About';

export default {
    //注册
    components:{
        Home,About,
    }
}
</script>

<style>

</style>