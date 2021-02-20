<template>
     <div class="shopcar_content">
        <div class="topBox">
            <div class="mui-card" v-for="(item,index) in carList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                    <mt-switch  v-model="switchObj[item.id]" @change="getSwtich(item.id,switchObj[item.id])"></mt-switch>
                    <img src="../../images/phone2.jpg"/>
                    <div>
                        <h1>华为HUAWEI P40Pro 5G四摄</h1>
                        <div>
                            <span class="price">￥{{item.price}}</span>
                            <numBox @getCountNum="changeCountNum" :id="item.id" :maxNum="20" :num="item.count"></numBox>
                            <a @click.prevent="deleteCar(item.id,index)">删除</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <div class="buttomBox">
                    <div>
                        <p>总计(不含运费)</p>
                        <p>已勾选商品&nbsp;<span>{{$store.getters.getCarTotal.num}}</span>&nbsp;件&nbsp;,&nbsp;总价&nbsp;:&nbsp;<span>￥{{$store.getters.getCarTotal.price}}</span>元</p>
                    </div>
                    <mt-button size="small" type="danger" >去结算</mt-button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import numBox from '../subcomponents/num.vue';
export default {
    data(){
        return {
            carList:[],
            switchObj:{}
        }
    },
    created(){
        this.getList();
    },
    components:{
        numBox
    },
    methods:{
        getList(){
            console.log(this.$store)
            this.carList=this.$store.state.car.map(item=>{
                return {id:item.id,count:item.count,price:item.price,selected:item.selected}
            });
            this.carList.forEach(item=>{
                this.switchObj[item.id]=item.selected
            })
        },
        changeCountNum:function(info){
            this.$store.commit('changeCar', info)
        },
        getSwtich(id,value){
           this.$store.commit('changeSelected', {id:id,selected:value})
        },
        deleteCar(id,index){
              this.carList.splice(index,1) 
              this.$store.commit('deleteCar', id);
             
        }
    },
    // watch:{
    //     'switchObj':function (newVal,oldVal){
    //         console.log(newVal,oldVal)
    //     }
    // }
}
</script>
<style lang="less" scoped>
.shopcar_content{
    overflow: hidden;
    .topBox{
         overflow: hidden;
        background: #eeeeee;
        .mui-card-content-inner{
            display: flex;
            align-items: center;
            h1{
                font-size: 13px;
                padding: 0  0 15px 0;
                margin: 0;
            }
            img{
                width:60px;
            }
            span.price{
                color: red;
            }
            .mui-numbox{
                margin:  0 5px;
            }
        }
    }
    .buttomBox{
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            color:red;
            font-size: 15px;
             font-weight: bold;
        }
    }
    
}
</style>