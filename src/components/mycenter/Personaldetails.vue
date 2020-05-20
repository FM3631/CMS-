<template>
  <div class="person-box">
    <div>
      <ul>
        <li>昵称：</li>
        <li>邮箱：</li>
        <li>电话：</li>
        <li>性别：</li>
        <li>身份：</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
   created() {
       
   }, 
  methods: {
      
  }
};
</script>
<style scoped lang="less">
.person-box {
  margin-top: 30%;
}
ul{
    width: 90%;
    padding: 5%;
    li{
        list-style: none;
        font-size: 20px;
        color: rgb(53, 51, 50);
        margin: 10% 0;
        border-bottom: 1px solid #ccc;
    }
}
</style>