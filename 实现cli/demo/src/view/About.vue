<template>
<!-- <h1> hello this is Home == {{$store.state.title}}</h1> -->
<h1> hello {{msg}}</h1>
</template>

<script>
export default {
    data(){
        return {
            msg:'About组件'
        }
    }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
h1{
    background-clip: $bg;
    color:$color;
}
</style>