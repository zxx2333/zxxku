<template>
  <div>
      <h1> Demo </h1>
      <h1>
          {{msg}}
          {{num}}
      </h1>
      <hr>
  </div>
</template>

<script>

export default {
    data(){
        return {
            msg:'Demo-msg',
            num:10000,
        }
    }
}
</script>

<style>

</style>