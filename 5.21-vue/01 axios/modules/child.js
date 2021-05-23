//子组件
import Vue from 'vue';
export default Vue.extend({
    template:`<h1>C h i l d </h1>`,
    created(){
                console.log('Child',this);
                this.$http
                .get('/data/big.json',{
                    // puery数据
                    params:{
                        sex:'nan',
                        age:21,
                    }
                })
                .then((res) => {
                    console.log('Child*****:',res);
                    this.msg = res.data.msg
                })
                .catch(err => console.log(err))
    }
});