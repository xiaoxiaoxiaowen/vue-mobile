<template>
     <div class="photoInfo-con">
         <div class="photoInfoHeader">
            <h1>{{infoDetal.title}}</h1>
            <p class="titlebot">
                <span>发表时间:{{infoDetal.time | dateFormat}}</span>
                <span>点击{{infoDetal.click}}次</span>
            </p>
         </div>
        <div class="photoInfoCon">
            <!-- <ul>
                <li v-for="(item,index) in infoDetal.pics" :key="index"><img :src="item"/></li>
            </ul> -->
            <vue-preview :slides="infoDetal.pics" @close="Hclose"></vue-preview>
            <div class="photoInfoCon-De">
                {{infoDetal.des}}
            </div>
        </div>
         <div class="photoInfoCom">
             <comments-box :id="id"></comments-box>
        </div>
     </div>
</template>
<script>
import commmentVue from "../subcomponents/commment.vue";
export default {
    created () {
        this.getInfo();
    },
    
    data(){
        return {
            id:this.$route.params.id,
             slide1: [
                        {
                            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                            alt: 'picture1',
                            title: '图片1',
                            w: 600,
                            h: 400
                        },
                        {
                            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        }
                    ],
            info:[
                {
                    title:"浓眉哥攻防两端再升级 有望冲击两项大奖 湖人赚大了",
                    pics:[
                        {
                            src:"../../images/5.jpg",
                            msrc:"../../images/5.jpg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/6.jpg",
                            msrc:"../../images/6.jpg",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/7.jpg",
                            msrc:"../../images/7.jpg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/8.jpg",
                            msrc:"../../images/8.jpg",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/9.jpg",
                            msrc:"../../images/9.jpg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/10.jpg",
                            msrc:"../../images/10.jpg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },

                        // "../../images/6.jpg",
                        // "../../images/7.jpg",
                        // "../../images/8.jpg",
                        // "../../images/9.jpg",
                        // "../../images/10.jpg",
                    ],
                    time:new Date(),
                    click:2,
                    des:"NBA休赛期是假期，更是球员提升技能的大好机会，很多球员在经过休赛期的磨砺之后实现了升级，比如上赛季已经是总冠军球队得分王且在最佳防守球员的评选中排名第二的安东尼-戴维斯就在攻防两端实现了“再升级”，仅从本赛季至今的表现来看他有望冲击两项大奖，这也在一定程度上佐证了湖人续约他是“赚大了”。"
                },
                {
                    title:"马自达：我还活着，我还没倒闭，我还能再撑几年！",
                    pics:[
                        {
                            src:"../../images/car.jpeg",
                            msrc:"../../images/car.jpeg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/car.jpeg",
                            msrc:"../../images/car.jpeg",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/car2.jpeg",
                            msrc:"../../images/car2.jpeg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/car3.png",
                            msrc:"../../images/car3.png",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/car2.jpeg",
                            msrc:"../../images/car2.jpeg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/car.jpeg",
                            msrc:"../../images/car.jpeg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },

                        // "../../images/6.jpg",
                        // "../../images/7.jpg",
                        // "../../images/8.jpg",
                        // "../../images/9.jpg",
                        // "../../images/10.jpg",
                    ],
                    time:new Date(),
                    click:2,
                    des:"虽然马自达卖的不好，但你们也不能说它解散，不卖车，停产， 倒闭了啊。最近，一张图在网络上流散开来，大家可能已经看不到这张图了，我简单一下截图的内容信息吧，大致意思是这样：一汽马自达事业部将会解散，原一汽马自达销售公司员工将会转到奔腾或者事业部，其次阿特兹将会永久性停产，现有车辆将会清库存处理。"
                },
                {
                    title:"湖人圣诞大战大胜独行侠 创造了多少队史纪录",
                    pics:[
                        {
                            src:"../../images/5.jpg",
                            msrc:"../../images/5.jpg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/6.jpg",
                            msrc:"../../images/6.jpg",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/7.jpg",
                            msrc:"../../images/7.jpg",
                            alt: 'picture2',
                            title: '图片2',
                           w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/8.jpg",
                            msrc:"../../images/8.jpg",
                            alt: 'picture2',
                            title: '图片2',
                            w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/9.jpg",
                            msrc:"../../images/9.jpg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },
                        {
                            src:"../../images/10.jpg",
                            msrc:"../../images/10.jpg",
                            alt: 'picture2',
                            title: '图片2',
                             w: 1200,
                            h: 900
                        },

                        // "../../images/6.jpg",
                        // "../../images/7.jpg",
                        // "../../images/8.jpg",
                        // "../../images/9.jpg",
                        // "../../images/10.jpg",
                    ],
                    time:new Date(),
                    click:2,
                    des:"NBA休赛期是假期，更是球员提升技能的大好机会，很多球员在经过休赛期的磨砺之后实现了升级，比如上赛季已经是总冠军球队得分王且在最佳防守球员的评选中排名第二的安东尼-戴维斯就在攻防两端实现了“再升级”，仅从本赛季至今的表现来看他有望冲击两项大奖，这也在一定程度上佐证了湖人续约他是“赚大了”。"
                }
            ],
            infoDetal:{},
        }
    },
    methods: {
        getInfo:function(){
            this.infoDetal=this.info[this.id]||{};
            console.log(this.infoDetal)
        },
        Hclose:function(){
            console.log("close")
        },
    },
    components: {
     "comments-box":commmentVue
    }
}
</script>
<style lang="less" >
.figure{
    margin: 0;
}
.photoInfo-con{
    padding: 0 2px;
    .photoInfoHeader{
        h1{
            text-align: center;
            font-size: 15px;
            color: #226aff;
        }
        p.titlebot{
            display: flex;
            justify-content: space-between;
        }
    }
    .photoInfoCon{
        ul{
            padding:0px;
            margin:0px;
            list-style: none;
            li{
                width: 80px;
                height: 80px;
                display: inline-block;
                img{
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                }
            }
        }
        .my-gallery{   //deep深层作用选择器
                display: flex;
                flex-wrap:wrap;//默认换行
                figure{
                    margin: 5px;
                    img{
                        width: 80px;
                        height:80px;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
        }
        .photoInfoCon-De{
            line-height: 29px;
            font-size: 14px;
        }
    }
}


</style>