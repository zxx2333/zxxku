<template>
    <div>
        <h1>Child</h1>
        <h1> {{msg}} </h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg : 'Child-msg'
        }
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color:orange;
        &:hover{
            color:red;
        }
    }
</style>