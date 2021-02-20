<template>
    <div class="shopInfo-content">
			<transition @before-enter="beforeenter"  @enter="enter" @after-enter="afterenter" >
				<div class="ball" v-show="ballFlag" ref="ball"></div>
			</transition>
			
        	<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<lunbo :lubolist="lunboL"></lunbo>
					</div>
				</div>
			</div>
            <div class="mui-card">
				<div class="mui-card-header">【6期免息】华为HUAWEI P40Pro 5G四摄50倍变焦曲面屏官方旗舰店正品</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div>
							市场价格&nbsp;:<del>￥{{oPrice}}</del>&nbsp;&nbsp;
							销售价格&nbsp;:<span class="new_pirce">￥{{price}}</span>
						</div>
						<div>购买数量&nbsp;:
							<numBox @getCountNum="getCountNum" :maxNum="max"></numBox>
						</div>
					
						<div>
							<mt-button size="small" type="primary" >立即购买</mt-button>
							<mt-button size="small" type="danger" @click="addCars">加入购物车</mt-button>
						</div>
					</div>
				</div>
			
			</div>
			
			<div class="mui-card">
				<div class="mui-card-header">商品详情</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号&nbsp;:&nbsp;SD1457558</p>
						<p>库存情况&nbsp;:&nbsp;{{max}}</p>
						<p>上架时间&nbsp;:&nbsp;2020-12-31 14:30:12</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<p>
						<mt-button size="large" type="primary" plain @click="goDes">图文介绍</mt-button>
					</p>
					<p>
						<mt-button size="large" type="danger" plain @click="goCom">商品评论</mt-button>
					</p>
				</div>
			</div>
			
			
			
    </div>
</template>
<script>
import lunbo from '../subcomponents/lunbo.vue';
import numBox from '../subcomponents/num.vue';

export default {
    data(){
        return{
			ballFlag:false,
			max:15,
			price:0,
			oPrice:0,
            id:this.$route.params.id,
            lunboL:[
                 "../../images/phone4.jpg",
                "../../images/phone5.jpg",
                "../../images/phone6.jpg",
			],
			CountNum:1
        }
	},
	created(){
		this.price=Math.floor(Math.random() * 5000  + 1000);
		this.oPrice=this.price-200
	},
	methods:{
		goDes(){
			this.$router.push("/home/shopDes")
		},
		goCom(){
			this.$router.push('/home/shopComment')
		},
		addCars(){
			this.ballFlag=!this.ballFlag;
			this.$store.commit('addCar', {id:this.id,count:this.CountNum,selected:true,price:this.price})
		},
		beforeenter(el){
			el.style.transform="translateY(-10px)";
		},
		enter(el,done){
			//获取小球
			const ballBox=this.$refs.ball.getBoundingClientRect();
			const carBox=document.getElementById("shopCarIcon").getBoundingClientRect();
			const left=carBox.left-ballBox.left;
			const top=carBox.top-ballBox.top;
			el.offsetWidth;
			el.style.transform=`translate(${left}px,${top}px)`;
			el.style.transition="all 1s cubic-bezier(0.4,-0.3,1,0.68)";
			done();
		},
		afterenter(el){
		
			this.ballFlag=!this.ballFlag;
		},
		getCountNum(Num){
			this.CountNum=Num;
		}
	},
    components:{
		lunbo,
		numBox
	}
}
</script>
<style lang="less" scoped>
.shopInfo-content{
    background: #eeeeee;
	overflow: hidden;
	.mui-card-content-inner>div{
		padding: 5px 0;
		span{
		
			padding: 0 5px;
		}
		.new_pirce{
			color:red;
		}
	}
	.mui-card-footer{
		display: block;
		p{
			margin: 0;
			padding: 10px;
		}
	}
	.ball{
		width:15px;
		height: 15px;
		background: red;
		position:absolute;
		z-index: 99;
		border-radius: 50%;
		left: 145px;
		top: 418px;
	}
}
</style>