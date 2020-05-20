<template>
  <div>
    <h3>用户注册</h3>
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
      <van-field
        v-model="phoneNum"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="test"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <button  class="but1" @click="getTestNum"><span>点击获取验证码</span></button>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">点击注册</van-button>
      </div>
    </van-form>
    <router-link to="/login">
      <span class="span3">已有账号，快速登录！</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      phoneNum: "",
      test: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.getRegister()
    },
    getTestNum() {
      this.getTest()
    },
    getRegister() {
      const url = 
      `http://59.111.92.205:8088/api/registry?Content-Type=application/x-www-form-urlencoded&loginName=${this.username}&userName=111111&password=${this.password}&phonenumber=${this.phoneNum}&code=${this.test}`;
      this.$axios.post(url).then(res=>{
        console.log(res)
      });
    },
    getTest() {
      const url = `http://59.111.92.205:8088/api/short-message/vcode/${this.phoneNum}`;
      this.$axios.get(url).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style scoped>
.but1 {
  padding: 10px;
  font-size: 14px;
  border: none;
  background-color:#fff;
  color: blue;
  float: right;
}
.span3{
  font-size: 13px;
  padding: 20px;
}
span :hover{
  color: black;
}
h3 {
  text-align: center;
}
</style>