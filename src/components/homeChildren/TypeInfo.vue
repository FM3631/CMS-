<template>
  <div class="content">
    <!-- 导航 -->
    <van-nav-bar :title="this.$route.params.title" left-arrow @click-left="onClickLeft">
      <template #left>
        <span style="color:blue;">&lt;返回</span>
      </template>
    </van-nav-bar>
    <h3>{{this.$route.params.title}}</h3>

    <div v-html="item.content" v-for="item in getContentLsit" :key="item.id"></div>
    <van-icon
      class="icon"
      name="like"
      style="position: fixed; right: 35px;bottom: 80px;"
      color="blue"
      @click="collect"
      ref="changeColor"
    />
  </div>
</template>
<script>
import { getTypeContainerList } from '../../api/httpObj.js'
import { collectState } from '../../api/httpObj.js'
import { Toast } from "vant";
export default {
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      flag: true,
      getContentLsit:[]
    };
  },
  created(){
    getTypeContainerList(1,1,1)
    .then(res=>{
      // console.log(res)
      this.getContentLsit = res.rows
    })
    .catch()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    collect() {
      if (this.flag) {
        this.$refs.changeColor.style.color = "red";
          
          this.getContentLsit.forEach(item=>{
            collectState(item.articleId)
            .then(res=>{
              console.log(res)
            })
            .catch()
          })

        this.flag = false;
        Toast.success("收藏成功");
      } else {
        this.$refs.changeColor.style.color = "blue";

        this.getContentLsit.forEach(item=>{
            collectState(item.articleId)
            .then(res=>{
              console.log(res)
            })
            .catch()
          })
        this.flag = true;
        Toast.success("取消收藏");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.content /deep/ {
  font-size: 14px;
  text-align: center;
  padding: 0 20px;
  .icon{
    font-size: 30px;
  }
  /deep/ img {
    width: 100%;
  }
}
</style>