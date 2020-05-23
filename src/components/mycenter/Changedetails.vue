<template>
  <div class="person-box">
     <van-nav-bar title="修改信息" left-text="返回"  @click-left="onClickLeft"  />
    <div class="adatar">
      <van-uploader :after-read="afterRead">
        <img :src="avatar" alt />
      </van-uploader>
      <p style="font-size:12px; margin:0;">点击图片更换头像</p>
    </div>
    <div class="change-info">
      <van-form @submit="onSubmit">
        <van-field
          v-model="userName"
          name="用户昵称"
          label="用户昵称："
          placeholder="用户昵称"
          :rules="[{ required: true, message: '请填写用户昵称' }]"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="手机号码"
          label="手机号码："
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="email"
          type="email"
          name="我的邮箱"
          label="我的邮箱："
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"  @click.native="handleClick">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { changeinfo } from "../../api/httpObj.js";
import { changeImg } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
export default {
  data() {
    return {
      userName: "",
      phone: "",
      email: "",
      avatar: ""
    };
  },
  created() {
    getInfo()
      .then(res => {
        console.log(res);
        this.avatar = res.data.avatar;
      })
      .catch();
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      changeImg(file.file)
        .then(res => {
          console.log(res);
        })
        .then(getInfo)
        .then(res => {
          this.avatar = res.data.avatar;
        })
        .catch();
    },
    onSubmit(values) {
      console.log("submit", values);
    },
    handleClick() {
      changeinfo(this.userName, this.phone, this.email)
        .then(res => {
          console.log(res);
          // this.lohh = res.data.loginName
          // console.log(res.data.userName)
        })
        .catch();
      this.$router.push("/personaldetails");
    },
    onClickLeft(){
       this.$router.go(-1)
    }
  }
};
</script>
<style scoped lang="less">
.person-box {
      background: antiquewhite;
  margin-top: 10%;
  .adatar {
    position: relative;
    margin: auto;
    margin-top: 8%;
    border-radius: 50%;
    width: 100px;
    img {
      object-fit: cover;
      object-position: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    input {
      position: absolute;
      border-radius: 50%;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      outline: none;
      opacity: 0;
      cursor: pointer;
      &:focus {
        box-shadow: none;
      }
    }
  }
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
padding: 10% 0;
    width: 100%;
    height: 100px;
    text-align: center;
}
</style>