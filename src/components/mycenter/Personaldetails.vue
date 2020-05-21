<template>
  <div class="person-box">
    <div>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
       <van-field
        v-model="text"
        type="text"
        name="手机号"
        label="手机号"
        placeholder="手机号"
      
      />
    </div>
  </div>
</template>
<script>
// import { getInformation } from "../../api/httpObj";
export default {
  components: {},
  data() {
    return {
      text:'',
       username: "",
    };
  },
  created() {},
  methods: {}
};
</script>


<style scoped lang="less">
.person-box {
  margin-top: 10%;
}
ul {
  width: 90%;
  padding: 5%;
  li {
    list-style: none;
    font-size: 20px;
    color: rgb(53, 51, 50);
    margin: 10% 0;
    border-bottom: 1px solid #ccc;
  }
}
</style>