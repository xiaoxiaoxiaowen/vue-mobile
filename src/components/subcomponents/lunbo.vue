<template>
    <div>
         <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in lubolist" :key="i"><img :class="{full:full}" :src="item"/></mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["lubolist","full"],
}
</script>
<style lang="less" scoped>
.mint-swipe{
    height: 200px;
    
    .mint-swipe-item{
        text-align: center;
        width: 100%;
        height: 200px;
        // &:nth-child(1){
        //     background: red;
        // }
        // &:nth-child(2){
        //     background:rgb(14, 204, 230);
        // }
        // &:nth-child(3){
        //     background: rgb(198, 10, 255);
        // }
        img{
            height:100%;
            
        }
        .full{
            width: 100%;
        }
    }
}
</style>