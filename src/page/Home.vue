<template>
  <div id="app">
    <!-- 顶部header -->
    <div class="header">
      <van-nav-bar title="看天下">
        <template #left>
          <router-link to="/SearchContainer" tag="span" style="margin-top:8px">
            <van-icon name="search" size="26" />
          </router-link>
        </template>
        <template #right>
          <router-link to="/Login" tag="span" style="margin-top:8px">
            <van-icon name="manager" size="26" />
          </router-link>
        </template>
      </van-nav-bar>
    </div>

    <!-- 中间部分 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">
        <router-link to="/HomeContainer">首页</router-link>
      </van-tabbar-item>

      <van-tabbar-item name="search" icon="orders-o">评论</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">
         <router-link to="/Mycontaner">我的</router-link>
        </van-tabbar-item>
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
a {
  text-decoration: none;
  // color:#1989fa
}
</style>
