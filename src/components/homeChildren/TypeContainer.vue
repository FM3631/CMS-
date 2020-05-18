<template>
    <div>
        <div class="container" v-for='item in newsList' :key='item.id'>
            <div class="left">
                <img :src="item.bannerImgUrl" alt="加载失败">
            </div>
            <div class="right">{{item.title}}</div>
        </div>
    </div>
</template>
<script>
import { getTypeContainerList } from '../../api/httpObj.js'
export default {
    data(){
        return {
            newsList:[]
        }
    },
    props:{
        categoryId:[String,Number]
    },
    created(){
        getTypeContainerList(0,10,this.categoryId)
        .then(res=>{
            console.log(res)
            this.newsList = res.rows
        })
        .catch()
    }
}
</script>
<style lang="less" scoped>
    .container{
        display: flex;
        padding: 0 20px;
    }
    .left{
        flex: 4;
        width: 100%;
    }
    .left>img{
        width: 100%;
        height: 80px;
    }
    .right{
        flex: 8;
        margin-left: 10px;
    }
</style>