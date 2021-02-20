<template lang="pug">
    <div>
         <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in newList" :key="index">
					<router-link :to="'/home/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}</h3>
							<p class="mui-ellipsis">
                                <span>发表时间:{{item.time | dateFormat}}</span>
                                <span>点击次数:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newList:[
				{
					title:"幸福账单",
                    time:new Date(),
                    img_url:"../../images/phone.png",
                    click:8,
                    id:2
                },
                	{
					title:"幸福账单111",
                    time:new Date(),
                    img_url:"../../images/pic.png",
                    click:2,
                     id:3
                },
                	{
					title:"幸福账单222",
                    time:new Date(),
                    img_url:"../../images/phone.png",
                    click:0,
                     id:1
                },
                	{
					title:"幸福账单333",
                    time:new Date(),
                    img_url:"../../images/pic.png",
                    click:1,
                     id:1
                },
                	{
					title:"幸福账单444",
                    time:new Date(),
                    img_url:"../../images/phone.png",
                    click:6,
                     id:1
                },
                	{
					title:"幸福账单555",
                    time:new Date(),
                    img_url:"../../images/phone.png",
                    click:5,
                     id:1
                },
                	{
					title:"幸福账单666",
                    time:new Date(),
                    img_url:"../../images/pic.png",
                    click:2,
                     id:1
                },
                	{
					title:"幸福账单666",
                    time:new Date(),
                    img_url:"../../images/pic.png",
                    click:2,
                     id:1
                }
			]
        }
    }
}
</script>
<style lang="less" scoped>
    .mui-table-view{
        li{
            h3{
                font-size: 14px;
            }
         p.mui-ellipsis{
             color: #226aff;
            display: flex;
            justify-content: space-between;
         }   
        }
    }
</style>