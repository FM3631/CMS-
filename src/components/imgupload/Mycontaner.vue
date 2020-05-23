<template>
  <div>
    <!-- 头像上传 -->
    <div class="adatar">
      <van-uploader :after-read="afterRead">
        <img :src="avatar" alt />
      </van-uploader>
      <p style="font-size:12px; margin:0;">点击图片更换头像</p>
    </div>

    <div class="choos-button" style="    text-align: center;">
      <router-link to="/MyCollect" tag="div">
        <mt-button plain>我的收藏</mt-button>
      </router-link>
      <router-link to="/MyLook" tag="div">
        <mt-button plain>我的订阅</mt-button>
      </router-link>
      <router-link to="/personaldetails" tag="div">
        <mt-button plain>我的信息</mt-button>
      </router-link>
      <router-link to="/changedetails" tag="div">
        <mt-button plain>修改信息</mt-button>
      </router-link>
      <button style="margin-top: 10%;" @click="exit">退出登录</button>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { changeImg, logOut } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
import Footer from "../homecontainer/Footer.vue";
import { Dialog } from "vant";
export default {
  name: "adatar",
  data() {
    return {
      avatar: "",
      show: false
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
    exit(){
      logOut().then(res=>{
        console.log(res)
        this.$router.push({
          path:'/login'
        })
      })
    },
    //头像选择
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
    }
    //确认 取消操作
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
    Footer
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    loginPromise() {
      return this.$store.state.loginPromise;
    }
  },
  mounted() {
    this.loginPromise.then(() => {
      if (!this.isLogin) {
        Dialog.confirm({
          title: "您还没有登陆，请登录"
          // message: "弹窗内容"
        })
          .then(() => {
            // on confirm
            this.$router.push("/login");
          })
          .catch(() => {
            // on cancel
          });
      }
    });
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
</style>