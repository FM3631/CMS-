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
      <button @click="getTestNum">点击获取验证码</button>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">点击注册</van-button>
      </div>
    </van-form>
    <router-link to="/login">
      <span>已有账号，快速登录！</span>
    </router-link>
  </div>
</template>
<script>
import { getRegister } from '../../api/login.js'
import { getTest } from '../../api/login.js'
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
      getRegister(this.username,this.password,this.phoneNum,this.test)
      .then(res=>{
        console.log(res)
      })
      .catch()
    },
    getTestNum() {
      getTest(this.phoneNum)
      .then(res=>{
        console.log(res)
      })
      .catch()
    },
  }
};
</script>
<style scoped>
button {
  /* background-color:rgb(255, 251, 0); */
  /* color: aliceblue; */
}
</style>