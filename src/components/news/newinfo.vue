<template>
    <div class="newInfo-content">
        <h3 class="newInfoTitle">{{detail.title}}</h3>
        <p class="titlebot">
            <span>发表时间:{{detail.time | dateFormat}}</span>
            <span>点击{{detail.click}}次</span>
        </p>
        <hr>
        <div class="box" v-html="detail.des">
        </div>
        <comments-box :id="id"></comments-box>
    </div>
</template>
<script>
import comment from '../subcomponents/commment.vue';
export default {
    created(){
        this.getInfo();
        console.log(this.$route)
    },
    data(){
        return {
            id:this.$route.params.id,
            newInfo:[
                {
                    title:"北京一男子开着阿斯顿马丁去面试，然后悲剧了",
                    time:new Date(),
                    click:2,
                    des:'<div class="article-content"><p><span class="bjh-p">【太平洋汽车网 新车频道】在最新一期的工信部申报目录上，我们获取了一组新款国产特斯拉Model 3的申报信息。新车为中期改款车型，不过整体外观基本与现款一致，仅对部分细节进行修改。此外，预计国产版将于2021年第一季度正式发布。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">外观上，国产新款Model 3整体外观基本与现款一致，仅对部分细节作出了修改，其中灯腔内部的结构采用了更合理的光照布局，可更集中光线并增强照射距离；而车窗/后视镜等处全部换装了熏黑装饰条。</span></p><p><span class="bjh-p">值得一提的是，新车所安装的头灯，并没有加入与美版一致的黑色亚光装饰条。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而轮毂部分，新车还配有全新样式的18英寸动力轮圈、19英寸运动轮圈，以及20英寸überturbine轮圈。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而动力部分，预计新款Model 3将保持不变，标准续航升级版拥有468km续航，最高时速225km/h，百公里加速时间仅为 5.6s。</span></p><p><span class="bjh-p">（文：太平洋汽车网 熊睿锋）</span></p></div>'
                },
                 {
                    title:"新款国产特斯拉Model 3实车曝光 多项细节升级",
                    time:new Date(),
                    click:7,
                    des:"<h1>放水电费水电费水电费水电费</h1>"
                },
                 {
                    title:"本周苹果新闻：AirPods Max宣布，Apple Fitness +发布",
                    time:new Date(),
                    click:16,
                     des:'<div class="article-content"><p><span class="bjh-p">【太平洋汽车网 新车频道】在最新一期的工信部申报目录上，我们获取了一组新款国产特斯拉Model 3的申报信息。新车为中期改款车型，不过整体外观基本与现款一致，仅对部分细节进行修改。此外，预计国产版将于2021年第一季度正式发布。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">外观上，国产新款Model 3整体外观基本与现款一致，仅对部分细节作出了修改，其中灯腔内部的结构采用了更合理的光照布局，可更集中光线并增强照射距离；而车窗/后视镜等处全部换装了熏黑装饰条。</span></p><p><span class="bjh-p">值得一提的是，新车所安装的头灯，并没有加入与美版一致的黑色亚光装饰条。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而轮毂部分，新车还配有全新样式的18英寸动力轮圈、19英寸运动轮圈，以及20英寸überturbine轮圈。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而动力部分，预计新款Model 3将保持不变，标准续航升级版拥有468km续航，最高时速225km/h，百公里加速时间仅为 5.6s。</span></p><p><span class="bjh-p">（文：太平洋汽车网 熊睿锋）</span></p></div>'
                },
                 {
                    title:"新款国产特斯拉Model 3实车曝光 多项细节升级",
                    time:new Date(),
                    click:16,
                    des:'<div class="article-content"><p><span class="bjh-p">【太平洋汽车网 新车频道】在最新一期的工信部申报目录上，我们获取了一组新款国产特斯拉Model 3的申报信息。新车为中期改款车型，不过整体外观基本与现款一致，仅对部分细节进行修改。此外，预计国产版将于2021年第一季度正式发布。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">外观上，国产新款Model 3整体外观基本与现款一致，仅对部分细节作出了修改，其中灯腔内部的结构采用了更合理的光照布局，可更集中光线并增强照射距离；而车窗/后视镜等处全部换装了熏黑装饰条。</span></p><p><span class="bjh-p">值得一提的是，新车所安装的头灯，并没有加入与美版一致的黑色亚光装饰条。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而轮毂部分，新车还配有全新样式的18英寸动力轮圈、19英寸运动轮圈，以及20英寸überturbine轮圈。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="../../images/car.jpeg" data-loaded="0"></div><p><span class="bjh-p">而动力部分，预计新款Model 3将保持不变，标准续航升级版拥有468km续航，最高时速225km/h，百公里加速时间仅为 5.6s。</span></p><p><span class="bjh-p">（文：太平洋汽车网 熊睿锋）</span></p></div>'
                }
            ],
            detail:""
        }
    },
    methods:{
        getInfo(){
            this.detail=this.newInfo[this.id];
        }
    },
    components:{
        "comments-box":comment
    }
}
</script>

<style lang="less" >
.newInfo-content{
    padding:0 4px;
    h3.newInfoTitle{
       text-align: center;
        color: red;
        font-size: 14px;
        margin: 15px 0;
    }
    p.titlebot{
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    div.box{
        img{
            width:100%
        }
    }

}
</style>