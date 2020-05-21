<template>
  <div>
    <!-- 头像上传 -->
    <div class="adatar">
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="choos-button" style="text-align: center;">

      <!-- <router-link to="/Login" tag="div"> -->
        <van-dialog v-model="show" title="去登陆" show-cancel-button>
          <img style="width: 100px;" src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-dialog>
      <!-- </router-link> -->

      <router-link to="/mylove" tag="div">
        <mt-button plain>我喜欢</mt-button>
      </router-link>
      <router-link to="/personaldetails" tag="div">
        <mt-button plain>我的信息</mt-button>
      </router-link>
      <router-link to="/changedetails" tag="div">
        <mt-button plain>修改信息</mt-button>
      </router-link>
      <button style="margin-top: 10%;">退出登录</button>
    </div>
  </div>
</template>

<script>
import { changeImg } from "../../api/httpObj";
export default {
  name: "adatar",
  data() {
    return {
      adatar: "",
      file: "",
      show: true,
    };
  },
  methods: {
    //头像选择
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
      changeImg(file.file)
        .then(res => {
          console.log(res);
        })
        .catch();
    }
  }
};
</script>

<style scoped lang="less">
.mint-button {
  margin: auto;
  margin-top: 10%;
  display: block;
}

button {
  text-align: center;
  line-height: 30px;
  margin: auto;
  width: 40%;

  border: 2px solid darkcyan;
}

.adatar {
  position: relative;
  margin: auto;
  margin-top: 20%;
  width: 100px;
  height: 100px;
  img {
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  input {
    position: absolute;
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
</style>