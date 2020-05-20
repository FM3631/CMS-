<template>
  <div>
    <h3>用户登录</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">快速登录</van-button>
        <router-link to="/register">
          <span class="span2">还没有账号？点击注册</span>
        </router-link>
      </div>
    </van-form>
  </div>
</template>
<script>
// import { getLogin } from "../../api/login";
export default {
  data() {
    return {
      username: "",
      password: "",
      loginList: []
    };
  },
  // created() {
  //   getLogin(this.username="kxr224",this.rememberMe=true,this.password=111111)
  //   .then(res=>{
  //   console.log(res)
  //   })
  // },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      // getLogin().then(res => {
      //   console.log("11111111"+res);
      // });
      this.getLogin();
      this.$router.push('/HomeContainer')
    },
    getLogin() {
      const url = `http://59.111.92.205:8088/api/login?Content-Type=application/x-www-form-urlencoded&username=${this.username}&password=${this.password}&rememberMe=true`;
      this.$axios.post(url).then(res => {
        console.log(res);
        this.loginList = res.data;
        if (this.loginList.code == 0) {
          console.log(this.loginList.msg);
          // alert(this.loginList.msg)
        } else {
          console.log(this.loginList.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
 .van-field {
   padding: 20px;
 }
 h3 {
   text-align: center;
 }
 .span2{
   
   display: inline-block;
   padding: 10px;
   font-size: 13px;
 }
</style>