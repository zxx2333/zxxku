<template>
    <div>
        <h1> App </h1>
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
        return{
            msg : 'App-msg'
        }
    },
    components:{
        child:Child,
        demo:Demo
    }
}
</script>

<style >
    
</style>