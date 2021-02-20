import VueRouter from "vue-router"
import home from './components/tabbar/home.vue'
import member from './components/tabbar/menber.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newlists from './components/news/newlists.vue'
import newinfo from './components/news/newinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoInfo from './components/photo/photoInfo.vue'
import shopList from './components/shop/shopList.vue'
import shopInfo from './components/shop/shopInfo.vue'
import shopDes from './components/shop/shopDes.vue'
import shopComment from './components/shop/shopComment.vue'
var router =new VueRouter({
   routes:[
      {
         path:"/",
         redirect: "/home"
      },
      {path:"/home",component:home},
      {path:"/member",component:member},
      {path:"/shopcar",component:shopcar},
      {path:"/search",component:search},
      {path:"/home/newlists",component:newlists},
      {path:"/home/newinfo/:id",component:newinfo},
      {path:"/home/photolist",component:photolist},
      {path:"/home/photoInfo/:id",component:photoInfo},
      {path:"/home/shopList",component:shopList},
      {path:"/home/shopInfo/:id",component:shopInfo,name:"shopInfo"},
      {path:"/home/shopDes",component:shopDes,name:"shopDes"},
      {path:"/home/shopComment",component:shopComment,name:"shopComment"},
   ],
   linkActiveClass:"mui-active"
})
export default router