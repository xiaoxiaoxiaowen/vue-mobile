//入口文件
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
// import { Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
import app from  './App.vue';
//导入时间格式化插件
import moment from 'moment'

//图片插件
import VuePreview from 'vue-preview'
// Vue.use(VuePreview,{
//     maxSpreadZoom: 2, // 控制预览图最大的倍数，默认是2倍，我这里改成了原图
//    fullscreenEl: false, //控制是否显示右上角全屏按钮
//     closeEl: true, //控制是否显示右上角关闭按钮
//     tapToClose: true, //点击滑动区域应关闭图库
//     shareEl: false, //控制是否显示分享按钮
//     zoomEl: false, //控制是否显示放大缩小按钮
//     counterEl: false, //控制是否显示左上角图片数量按钮
//     arrowEl: true,  //控制如图的左右箭头（pc浏览器模拟手机时）
//     tapToToggleControls: true, //点击应切换控件的可见性
//     clickToCloseNonZoomable: true //点击图片应关闭图库，仅当图像小于视口的大小时
//   })
// with parameters install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})


Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
})
var carInfo=JSON.parse(localStorage.getItem('car')||'[]');
const store = new Vuex.Store({
  state: {
    //car: {},
    car: carInfo,
    carCount:0
  },
  mutations: {
      // addCar:function (state,goodInfo){
      //   if(state.car[goodInfo.id]){
      //     state.car[goodInfo.id].count+=goodInfo.count;
      //   }else{
      //     state.car[goodInfo.id]=goodInfo;
      //   }
      //   state.carCount+=goodInfo.count;
      //   console.log(state)
      // }

      addCar:function (state,goodInfo){
        let flag=false;
        state.car.some(item=>{
          if(item.id==goodInfo.id){
            item.count+=goodInfo.count;
            flag=true;
          }
        });
        if(!flag)state.car.push(goodInfo);
        localStorage.setItem('car',JSON.stringify(state.car));
        console.log(state.car)
      },
      deleteCar(state,id){
        state.car.some((item,index)=>{
          if(item.id==id){
            state.car.splice(index,1)
            return true;
          }
        });
        localStorage.setItem('car',JSON.stringify(state.car));
      },
      changeCar:function(state,goodInfo){
          state.car.some(item=>{
            if(item.id==goodInfo.id){
              item.count=goodInfo.count;
            }
          });
          localStorage.setItem('car',JSON.stringify(state.car));
      },
      changeSelected(state,goodInfo){
        state.car.some(item=>{
          if(item.id==goodInfo.id){
            item.selected=goodInfo.selected;
          }
        });
        localStorage.setItem('car',JSON.stringify(state.car));
      }
  },
  getters:{
    // getCount:function(state){
    //   return  state.carCount;
    // }
    getCount:function(state){
        var count=0;
        state.car.forEach(item=>{
          count+=item.count;
        });
        return count;
    },
    getCarTotal(state){
        let totalNum=0;
        let totalPrice=0;
        state.car.forEach(item=>{
          if(item.selected){
            totalNum++;
            totalPrice+=item.price*item.count
          } 
        });
      return {num:totalNum,price:totalPrice};
    }
  }
})
var vm=new Vue({
   el:"#app",
   render:c=>c(app),
   router,
   store
})
