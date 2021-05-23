<template>
  <div>
      <!-- 使用自定义插件的指令bm -->
      <h1 v-bm> Child </h1>
      <h1>
          <!-- 使用自定义插件的过滤器bm -->
          {{msg | yes}}
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
    },
    created(){
        //查看axios属性是否成功安装
        console.log('$http',this.$http);
    }
}
</script>

<style>

</style>