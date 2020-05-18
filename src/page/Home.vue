<template>
  <div id="app">
    <!-- 顶部header -->
    <div class="header">
      <van-nav-bar title="看天下">
        <template #left>
          <van-icon name="search" size="26" />
        </template>
        <template #right>
          <van-icon name="manager" size="26" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 中间部分 -->
    <router-view></router-view>

    <!-- 底部 -->

    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="orders-o">评论</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">我的</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">联系我们</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "home"
    };
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #e09841;
}
.van-icon {
  color: #fff;
}
</style>
