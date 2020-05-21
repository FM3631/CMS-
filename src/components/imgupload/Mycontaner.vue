<template>
  <div>
    <!-- 头像上传 -->
    <div class="adatar">
      <!-- <img :src="avatar" alt />
      <van-uploader :after-read="afterRead" />-->

      <van-uploader :after-read="afterRead">
        <img :src="avatar" alt />
      </van-uploader>
      <p style="font-size:12px; margin:0;">点击图片更换头像</p>
    </div>


    <div class="choos-button" style="    text-align: center;">
      <router-link to="/mylove" tag="div">
        <mt-button plain>我的喜欢</mt-button>
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
import { changeImg } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
import { Dialog } from 'vant';
export default {
  name: "adatar",
  data() {
    return {
      avatar: "",
      show: true
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
    //头像选择
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      changeImg(file.file)
        .then(res => {
          console.log(res);
          /* getInfo()
            .then(res => {
              console.log(res);
              this.avatar = res.data.avatar;
            }) */
          // .catch();
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
    [Dialog.Component.name]: Dialog.Component
  },
  computed:{
    changeCode(){
        return this.$store.state.code
    }
  },
  mounted() {
    Dialog
      .confirm({
        title: "您还没有登陆，请登录",
        // message: "弹窗内容"
      })
      .then(() => {
        // on confirm
        if(this.$store.state.code == 0){this.show = false}
        this.$router.push('/login')
      })
      .catch(() => {
        // on cancel
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
  width: 100px;
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