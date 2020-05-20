<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <span class="history"  v-for="(item,index) in historyList" :key="item.id">
      <van-tag
        v-if="show.primary"
        closeable
        size="medium"
        type="primary"
        @close="close(index)"
      >{{item.content}}</van-tag>
    </span>

    <div style="text-align:center;margin-top:20px;font-size:14px" @click='clearHistory'>清空历史记录</div>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      historyList: [],

      //vant组件历史记录
      show: {
        primary: true,
        success: true,
      },
    };
  },
  created() {
    //搜索记录

    this.historyList = JSON.parse(localStorage.getItem("news") || "[]");
  },
  methods: {
    onSearch(val) {
      this.$router.push({ name: "toSearch", params: { value: this.value } });

      var historyObj = { id: Date.now(), content: this.value };
      if (this.value == "") {
        return;
      }
      this.historyList.push(historyObj);
      localStorage.setItem("news", JSON.stringify(this.historyList));

      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    
    //历史记录关闭方法
    close(index) {
      // console.log(index)
      this.historyList.splice(index,1)
      localStorage.setItem("news", JSON.stringify(this.historyList))
    },
    clearHistory(){
      localStorage.clear()
      this.historyList = []
    }

    
  }
};
</script>
<style lang="less" scoped>
.container {
  display: flex;
  padding: 0 20px;
}
.left {
  flex: 4;
  width: 100%;
}
.left > img {
  width: 100%;
  height: 80px;
}
.right {
  flex: 8;
  margin-left: 10px;
  font-size: 14px;
}
</style>