<template>
  <div>
      <h1> App </h1>
      <h1>
          {{msg}}
          {{num}}
      </h1>
      <hr>
      <child></child>
      <demo></demo>
  </div>
</template>

<script>
import Child from './Child';
import Demo from './Demo';
export default {
    data(){
        return {
            msg:'App-msg',
            num:13579
        }
    },
    //注册组件
    components:{
        child:Child,
        demo:Demo,
    }
}
</script>

<style>

</style>