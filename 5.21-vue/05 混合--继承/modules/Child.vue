<template>
  <div>
      <h1> Child </h1>
      <h1>
          {{msg}}
          {{num}}
      </h1>
      <hr>
      
  </div>
</template>

<script>
//引入其他组件
import Demo from './Demo';

export default {
    //局部混合
    mixins:[ Demo,{ 
        data() {
            return {
                sex: '男',
            }
        }
    } ],

    data(){
        return {
            msg:'Child-msg',
        }
    }
}
</script>

<style>

</style>