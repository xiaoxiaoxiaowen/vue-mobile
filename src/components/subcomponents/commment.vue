<template>
    <div class="cmt-content">
        <h3 class="cmt-top">发表评论</h3>
        <hr/>
        <textarea class="cmt-con" placeholder="评论最多不能超过120个字符" maxlength="120" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-item" v-for="(item,i) in comments" :key="i">
            <div class="cmt-title">
                {{i+1}}楼&nbsp;&nbsp;用户&nbsp;:&nbsp;{{item.user}}&nbsp;&nbsp;发表时间&nbsp;:&nbsp;{{item.time | dateFormat}}
            </div>
             <div class="cmt-body">
               {{item.cont}}
            </div>
        </div>
        <mt-button type="danger" @click="getMore" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    created(){
        this.getComment();
    },
    data(){
        return{
            dataIndex:1,
            commentInfo:{
                user:"匿名用户",
                time:new Date(),
                cont:"飞豹少时诵诗书"
            },
            content:"",
            comments:[
    
            ]
        }
    },
    methods:{
        getComment(){
            for(var i=0;i<this.dataIndex;i++){
                this.comments.push(this.commentInfo)
            }
          
        },
        getMore(){
            this.dataIndex++;
            this.getComment();
        },
        postComment(){
            if(this.content.trim().length === 0){
                Toast('评论内容不能为空！');
            }else{
                this.comments.unshift({
                     user:"匿名用户",
                    time:new Date(),
                    cont:this.content.trim()
                });
                this.content="";
            }
           
        }
    },
    props:["id"]
}
</script>
<style lang="less" scoped>
.cmt-content{
    .cmt-top{
        font-size: 18px;
    }
  .cmt-con{
      margin:0px

    }
 
    .cmt-item{
        margin: 5px 0;
        font-size: 13px;
        .cmt-title{
            line-height: 30px;
            background: #cccccc;;
        }
        .cmt-body{
            text-indent: 20px;
             line-height: 30px;
        }
    }
}
  
</style>