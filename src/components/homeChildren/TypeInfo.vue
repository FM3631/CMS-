<template>
    <div  class="content">
        
        <h3>{{this.$route.params.title}}</h3>
        
        <div v-html="this.$route.params.content"></div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        content:String
    }
}
</script>
<style lang="less" scoped>
     .content /deep/{
            font-size:14px;
            text-align: center;
      /deep/ img {width: 100%}
    }
</style>