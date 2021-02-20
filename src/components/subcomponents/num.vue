<template>
    
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="testNumInput" class="mui-input-numbox"  @change="getNum" ref="numInput" type="number" :value="num||1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    
</template>
<script>
import mui from '../../lib/mui/js/mui'
export default {
    data(){
        return {
            
        }
    },
    props:["maxNum","num","id"],
    mounted(){
        mui(".mui-numbox").numbox().setOption('max',this.maxNum)
    },
    methods:{
        getNum(){
            let num=this.$refs.numInput.value*1;
            num=num<=0?1:num>this.maxNum?this.maxNum:num;
            this.$emit("getCountNum",this.id!=undefined?{id:this.id*1,count:num}:num);
        },
    },
    watch:{
        'maxNum': function(newVal,oldVal){//父组件传递过来的maxnum可能是异步请求的数据，所以需要用watch监听maxNum值的改变再初始化numbox的最大值
                console.log(newVal,oldVal)
           mui(".mui-numbox").numbox().setOption('max',newVal)
        }
    }
}
</script>
<style lang="less" scoped>
.mui-numbox{
			height: 25px;
}
</style>