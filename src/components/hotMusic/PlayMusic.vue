<template>
  <div class="body">
    <video :src="this.mvList.url" controls="controls" ></video>
    <!-- <p>{{}}</p> -->
  </div>
</template>
<script>
import { getMv } from '../../api/videoList.js'
// import { getHotList } from '../../api/videoList.js'
export default {
  components: {},
  data() {
    return {
      mvList:[],
      // list:[]
    };
  },
  created(){
    getMv(this.$route.params.id).then(res=>{
      console.log(res)
      this.mvList = res.data;
    }).catch()

    // getHotList().then(res=>{
    //   console.log(res)
    //   this.list = res.data
    // }).catch()

  },
  // +this.$route.params.artistId
  methods:{
    
  }
};
</script>
<style scoped>
.body {
  margin-top: 10px;
}
video{
  object-fit:fill;
  width: 100%;
  height: 230px;
}
p{
  font-size: 16px;
  float: right;
  margin-right: 30px;
  margin-top: 30px;
}
</style>