<template>
    <div>
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in imgData" :key="i"><img :src="item"/></mt-swipe-item>
        </mt-swipe> -->
        <lunbo :lubolist="lunboL" :full="true"></lunbo>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/newlists">
                    <img src="../../images/news.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4">
                <router-link to="/home/photolist">
                    <img src="../../images/pic.png"/>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/shopList">
                <img src="../../images/buy.png"/>
                <div class="mui-media-body">商品购买</div></router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
               <img src="../../images/message.png"/>
                <div class="mui-media-body">留言反馈</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img src="../../images/video.png"/>
                <div class="mui-media-body">视频专区</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
               <img src="../../images/phone.png"/>
                <div class="mui-media-body">联系我们</div></a>
            </li>
        </ul>
    </div>
</template>
<script>
import lunbo from '../subcomponents/lunbo.vue';
export default {
    data(){
        return {
            id:0,
            lunboL:[
                 "../../images/1.jpg",
                "../../images/2.jpg",
                "../../images/3.jpg",
            ]
        }
    },
	components:{
			lunbo
	}

}
</script>
<style lang="less" scoped>

.mui-grid-view.mui-grid-9{
    background:#ffffff;
    border:none;
    .mui-table-view-cell{
       border-color: #ffffff; 
       img{
           width: 60px;
           height: 60px;
       }
       div.mui-media-body{
           font-size: 14px;
       }
    }
}
</style>