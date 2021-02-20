<template>
    <div class="app-content">
        <mt-header fixed title="项目1">
			<a slot="left" v-if="!isHome" @click="goBack">
				<mt-button icon="back">返回</mt-button>
			</a>
		</mt-header>
	    <transition>
			<router-view>

			</router-view>
		</transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-edit" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-edit" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-edit" to="/shopcar"> 
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="shopCarIcon" class="mui-badge">{{$store.getters.getCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-edit " to="/search">
				<span class="mui-icon mui-icon-search "></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>

export default {
	data(){
		return {
			isHome:true
		}
	},
	methods:{
		goBack(){
			this.$router.go(-1);
		}
	},
	created(){
		this.isHome=this.$route.path=="/home";
	},
	watch:{
		$route(to,from){
			this.isHome=to.path=='/home';
		}
   },
}
</script>
<style lang="less" scoped>
.my-gallery figure {
  float: left;
  width: 30%;
  height:calc(30vw - 0px);
  margin: 1.5%;
}

.my-gallery figure img {
  width: 80px;
}
div.app-content{
	padding-top: 40px;
	overflow-x: hidden;
	padding-bottom: 50px;
}
  .v-enter-active, .v-leave-active {
	  transition: all 0.2s ease;
	}
    .v-enter {  
		opacity: 0; 
		transform: translateX(100%); 
	}
	.v-leave-to{
		opacity: 0; 
		transform: translateX(-100%); 
		position: absolute;
	}
.mui-bar-tab .mui-tab-item-edit{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-edit .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-edit .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>