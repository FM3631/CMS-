<template>
  <div>
    <van-nav-bar title="订阅信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <h3>订阅列表</h3>
    <span @click="addMyLook(index)" v-for="(item,index) in List" :key="index">
      <van-tag type="danger" size="large" color="#f2826a">{{item.name}}</van-tag>
    </span>
    <h3>我的订阅</h3>
    <span v-for="(item) in subScribeList" :key="item.id">
      <van-tag type="danger" size="large" color="#7232dd">{{item.name}}</van-tag>
    </span>
  </div>
</template>
<script>
import { getTypeList, subScribe, getSubScribeList } from "../../api/httpObj.js";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: {
        primary: true,
        success: true
      },
      //分类
      List: [],

      //订阅列表参数
      categoryIdList:[],
      //订阅列表
      subScribeList: []
    };
  },
  computed: {
    look() {
      return this.$store.state.look;
    }
  },
  created() {
    getTypeList(0, 10)
      .then(res => {
        console.log(res);
        this.List = res.rows;
        // console.log(this.List);
      })
      .catch();

    //订阅列表
    getSubScribeList()
      .then(res => {
        // console.log(res);
        this.subScribeList = res.rows;
      })
      .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    //点击添加订阅
    addMyLook(index) {
        this.categoryIdList.push(this.List[index].categoryId)
      //调用订阅接口
      for (let i = 0; i < this.List.length; i++) {
        
        subScribe(this.categoryIdList)
          .then()
          .catch(); 
          this.subScribeList.push(this.List[index])
        break;
      }
      this.List.splice(index,1)
      Toast.success("订阅成功");
    }
  }
};
</script>
<style lang="less" scoped>
</style>