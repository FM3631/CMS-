<template>
  <div>
    <!-- 头像上传 -->
    <div class="adatar">
      <van-uploader :after-read="afterRead">
        <img :src="avatar" alt />
      </van-uploader>
      <p style="font-size:12px; margin:0;">点击图片更换头像</p>
    </div>
  </div>
</template>
<script>
import { changeImg } from "../../api/httpObj.js";
import { getInfo } from "../../api/httpObj.js";
export default {
  // name: "adatar",
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
  },
  computed:{
    changeCode(){
        return this.$store.state.code
    }
  },
 
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
 
}
</style>