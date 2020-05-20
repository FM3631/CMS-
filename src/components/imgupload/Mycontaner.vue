<template>
  <div>
    <div class="adatar">
      <img :src="adatar?adatar:require('../../assets/2.jpg')" alt />
      <input type="file" name @change="fileChange" />
      <!-- <button @click="submit">提交</button> -->
    </div>
    <div class="choos-button" style="    text-align: center;">
        <router-link to="/mylove" tag="div"> <mt-button plain>我喜欢的</mt-button></router-link>
        <router-link to="/personaldetails" tag="div"> <mt-button plain>我的信息</mt-button></router-link>
     <router-link to="/changedetails" tag="div"> <mt-button plain>修改信息</mt-button></router-link>
      <button style="margin-top: 10%;">退出登录</button>
    </div>
  </div>
</template>
<script src="../../node_modules/jquery/dist/jquery.js"></script>
<script>
export default {
  name: "adatar",
  data() {
    return {
      adatar: ""
    };
  },
  methods: {
    //头像选择
    fileChange(e) {
      var that = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        that.adatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submit() {
      var data = new FormData();
      data.appendTo("file", this.adatar);
      $ajax({
        type: "POST",
        data: data,
        processData: false, //processData 默认为false，当设置为true的时候,jquery ajax 提交的时候不会序列化 data，而是直接使用data
        contentType: false,
        success: function(res) {},
        error: function(err) {}
      });
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