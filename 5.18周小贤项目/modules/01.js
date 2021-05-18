import Vue from 'vue';

let app = new Vue({
    el:'#app',
    data:{
        msg:'hello',
    },
    created(){
        this.$on('demo',(arg) => {
            console.log(arg)
        });


        setTimeout( () => {
            this.$emit('demo','哈利路亚')
        },3000);
    },

    methods:{
        xxoo(){
            consolr.log('xxoo')
        }
    }
});