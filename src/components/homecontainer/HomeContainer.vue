<template>
  <div>
    
    <!-- 轮播图 -->
    <div class="loop">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in loopListrows" :key="index">
          <img v-lazy="item.imgList" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- typeList -->
    <van-tabs class="container">
        <van-tab v-for="item in typeListrows" :title="item.name" :key="item.categoryId">
        <!-- 分类内容 -->
        <TypeContainer :categoryId="item.categoryId"></TypeContainer>
        </van-tab>
    </van-tabs>

    
    
  </div>
</template>
<script>
import TypeContainer from "../homeChildren/TypeContainer.vue";
import { getLoopList } from "../../api/httpObj.js";
import { getTypeList } from "../../api/httpObj.js";
export default {
  components: {
    TypeContainer
  },
  data() {
    return {
      loopListrows: [],
      typeListrows: [],
    };
  },
  //获取轮播图
  created() {
    // this.getCategoryId();
    getLoopList(1, 4)
      .then(res => {
        // console.log(res);
        this.loopListrows = res.rows;
      })
      .catch();

    //获取分类列表
    getTypeList()
      .then(res => {
        this.typeListrows = res.rows;
      })
      .catch();
  },
  methods: {
    
  }
};
</script>
<style lang="less" scoped>
.van-swipe-item {
  width: 100%;
  height: 150px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}

</style>