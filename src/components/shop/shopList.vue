<template>
    <div class="shopList-Content">
        <div class="list-item" v-for="(item,index) in list" :key="index" @click="goDetail(index)">
            <img  :src="item.pic"/>
            <h1>{{item.title}}</h1>
            <div class="list-detail">
                <div class="price">
                    <span class="new">¥{{item.newPirce}}</span>
                    <span class="old">¥{{item.oldPirce}}</span>
                </div>
                 <div class="status">
                    <span>{{item.status}}</span>
                    <span>剩余{{item.num}}件</span>
                 </div>
            </div>
        </div>
          <mt-button type="danger" @click="getList" size="large" >加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            pageIndex:0,
            pageNum:5,
            listInfo:[
                {
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1999,
                    oldPirce:2199,
                    status:"热卖中",
                    num:60,
                    pic:"../../images/phone2.jpg",
                },
                {
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1899,
                    oldPirce:2199,
                    status:"促销",
                    num:120,
                    pic:"../../images/phone3.jpg",
                },{
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:2099,
                    oldPirce:2199,
                    status:"热卖中",
                    num:18,
                    pic:"../../images/phone2.jpg",
                }
                ,{
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1999,
                    oldPirce:2199,
                    status:"热卖中",
                    num:60,
                    pic:"../../images/phone3.jpg",
                },
                {
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1999,
                    oldPirce:2199,
                    status:"热卖中",
                    num:60,
                    pic:"../../images/phone2.jpg",
                },
                {
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1899,
                    oldPirce:2199,
                    status:"促销",
                    num:120,
                    pic:"../../images/phone3.jpg",
                },{
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:2099,
                    oldPirce:2199,
                    status:"热卖中",
                    num:18,
                    pic:"../../images/phone2.jpg",
                }
                ,{
                    title:"【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品",
                    newPirce:1999,
                    oldPirce:2599,
                    status:"热卖中",
                    num:60,
                    pic:"../../images/phone3.jpg",
                }

            ],
            list:[]
        }
    },
    methods:{
        getList:function(){
            this.list=this.list.concat(this.listInfo.slice(this.pageIndex*this.pageNum,(this.pageIndex+1)*this.pageNum));
            console.log(this.list,this.pageIndex)
            this.pageIndex++;
        },
        goDetail(id){
            this.$router.push({name:'shopInfo',params:{id}})
        }
    },
    created(){
        this.getList();
    }
}
</script>
<style lang="less" scoped>
.shopList-Content{
    display: flex;
    flex-wrap:wrap;
    padding: 7px;
    justify-content: space-between;
    .list-item{
       width: 49%;
       border:1px solid #cccccc;
       box-shadow: 0 0 5px #cccccc;
       margin: 3px 0;
       display: flex;
       flex-direction: column;
       justify-content:space-between;
       min-height: 305px;
       h1{
           font-size: 14px;
           padding: 2px;
           margin: 0;
       }
       img{
           width: 100%;
       }
       .list-detail{
           background: #eeeeee;
            margin: 2px;
            padding: 5px;
            color:#999;
            font-size: 14px;
            .price{
                padding: 5px 2px 0 2px;
                .new{
                    color:red;
                    font-size: 20px;
                }
                .old{
                    text-decoration: line-through;
                    margin-left: 5px;
                }
            }
            .status{
                 padding: 5px 2px 0 2px;
                display: flex;
                justify-content: space-between;
            }
       }
    }
}
</style>