<template>
  <div class="person-box">
    <div>
      <ul>
        <li>昵称：{{userName}}</li>
        <li>电话：{{phonenumber}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getInfo } from '../../api/httpObj.js'
export default {
  components: {},
  data() {
    return {
      userName:'',
      phonenumber:'',
    };
  },
   created() {
       getInfo()
      .then(res=>{
        console.log(res)
        this.userName = res.data.userName
        this.phonenumber = res.data.phonenumber
      })
      .catch()
   }, 
  methods: {
      
  }
};
</script>


<style scoped lang="less">
.person-box {
  margin-top: 10%;
}
ul {
  width: 90%;
  padding: 5%;
  li {
    list-style: none;
    font-size: 20px;
    color: rgb(53, 51, 50);
    margin: 10% 0;
    border-bottom: 1px solid #ccc;
  }
}
</style>