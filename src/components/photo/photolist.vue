<template>
    <div>
            <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id===0?'mui-active':'']" v-for="(item,index) in catalog" :key="index" @click="getPicList(item.id)" data-wid="tab-top-subpage-1.html">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
			<ul class="photoList">
			<router-link v-for="(item,i) in list" :key="i" :to="'/home/photoInfo/'+i" tag="li">
				<img v-lazy="item.url">
				<div class="picBox">
					<h1>{{item.title}}</h1>
					<p>{{item.con}}</p>
				</div>
			</router-link>
			</ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui'
export default {
	data(){
		return {
			catalog:[
				{id:0,title:"全部"},
				{id:1,title:"动物"},
				{id:2,title:"游戏"},
				{id:3,title:"风景"},
				{id:4,title:"汽车"},
				{id:5,title:"动漫"}
			],
			picList:[
				[
					{
						url:"../../images/1.jpg",title:"这个是标啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"
					},
					{url:"../../images/2.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/1.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/3.jpg",title:"这个是标题啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"}
				],
				[
					{url:"../../images/2.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/1.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/3.jpg",title:"这个是标题啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/1.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"}
				],
				[
					{url:"../../images/3.jpg",title:"这个是标题啊啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/3.jpg",title:"这个是标题啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/1.jpg",title:"这个是标题啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"},
					{url:"../../images/2.jpg",title:"这个是标题啊啊啊",con:"这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊这个是标题啊啊啊啊"}
				],
			],
			list:[]
		}
	},
    mounted(){
		mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		//  mui('.mui-scroll-wrapper').scroll({
		// 		scrollY: true, //是否竖向滚动
		// 		 scrollX: false, //是否横向滚动
		// 		 startX: 0, //初始化时滚动至x
		// 		 startY: 0, //初始化时滚动至y
		// 		 indicators: false, //是否显示滚动条
		// 		 deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
		// 		 bounce: true //是否启用回弹
		// 	});
	},
	created(){
		this.getPicList(0);
	},
	methods:{
		getPicList(cid){
			this.list=this.picList[cid]||[];
		}
	}
}

			
		
</script>
<style lang="less" scoped>
*{
    touch-action: pan-y;
}

ul.photoList{
	list-style: none;
	margin: 0;
	padding:0;
	padding: 10px;
	padding-bottom: 0px;
	li{
		position: relative;
		text-align: center;
		background: #ccc;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
		img{
			width: 100%;
			height: 300px;
			vertical-align: middle;
		}
		.picBox{
				color:#fff;
			    max-height: 90px;
				position: absolute;
				bottom: 0;
				overflow: hidden;
				text-align: left;
				background-color:rgba(0, 0, 0, 0.4) ;
				h1{
					font-size: 14px;
				}
				p{
					color:#fff;
					font-size: 13px;
				}
		}
	}
}
</style>