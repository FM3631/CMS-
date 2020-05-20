<template>
  <div>
      <h2>热门音乐</h2>
    <ul>
      <li v-for="item in muisicList" :key="item.id">
        <img :src="item.picUrl" alt />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      muisicList: []
    };
  },
  created() {
    this.getHotList();
  },
  methods: {
    getHotList() {
      const hotUrl = "http://59.111.92.205:8089/personalized/newsong";
      this.$axios.get(hotUrl).then(res => {
        // console.log(res);
        this.muisicList = res.data.result;
      });
    }
  }
};
</script>
<style scoped>
li {
  height: 80px;
  padding: 10px;
  line-height: 80px;
}
img {
  width: 30%;
  height: 100%;
  vertical-align: middle;
}
li img {
  float: left;
}
span{
    
    font-size: 22px;
}
</style>