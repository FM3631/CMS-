<template>
  <div class="person-box">
    <div class="change-info">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-button @click.native="handleClick">确认修改用户信息</mt-button>
    </div>
  </div>
</template>
<script>
import { changeinfo } from "../../api/httpObj.js";
export default {
  data() {
    return {
      userName: "",
      phone: ""
    };
  },
  created() {

  },
  methods: {
    handleClick(){
       changeinfo(this.userName, this.phone)
        .then(res => {
          console.log(res);
          // this.lohh = res.data.loginName
                // console.log(res.data.userName)
                
        })
        .catch();
      this.$router.push("/personaldetails");

    }
  }
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
.change-info {
  text-align: center;
}
</style>