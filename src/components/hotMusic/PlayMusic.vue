<template>
  <div class="body">
    <video :src="this.mvList.url" controls="controls" ></video>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      mvList:[],
      brsList:[]
    };
  },
  created(){
    this.getMv()
  },
  // +this.$route.params.artistId
  methods:{
    getMv(){
      const mvUrl = `http://59.111.92.205:8089/mv/url?id=`+this.$route.params.id;
      this.$axios.get(mvUrl).then(res => {
        console.log(res);
        // console.log()
        
        this.mvList = res.data.data;
        // for(var i in this.mvList.brs){
        //   console.log(i)
        // }
      });
    },
    // getHotList() {
    //   const hotUrl = "http://59.111.92.205:8089/mv/all";
    //   this.$axios.get(hotUrl).then(res1 => {
    //     console.log(res1);
    //     this.mvIdList = res1.data.data;
    //   });
    // }
  }
};
</script>
<style scoped>
.body {
  padding: 0 20px;
}
video{
  object-fit:fill;
  width: 100%;
  height: 250px;
}
p{
  font-size: 16px;
  float: right;
  margin-right: 30px;
  margin-top: 30px;
}
</style>