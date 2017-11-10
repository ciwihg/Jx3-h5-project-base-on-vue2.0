<template>
  <div class="bg1">
    <router-view></router-view>
    <a  class="whicon common" @click="onClick"></a>
    <a class="cyicon common"></a>
    <a class="tcicon common"></a>
    <a class="qxicon common"></a>
    <a class="slicon common"></a>
  </div>
</template>

<script>
import cwh from './commonwh.vue'
import ccy from './commoncy.vue'
import circlemask from "./circlemask.vue"
export default{
    name:"t1",
    components:{circlemask,cwh,ccy},
    data:function(){
      return{

    }
  },
  methods:{
    onClick:function () {
      this.$router.push({name:'wh'});
    }
  }
  }
</script>

<style>
body{
  width: 100%;
  height: 1080px;
  margin: 0;
  background:url('../assets/ncover.jpg') top no-repeat;
}
.bg1{
  width: 1200px;
  height: 1080px;
  margin: 0 auto;
  position: relative;
  background:url('../assets/cover-m.jpg') top no-repeat;
}
.whicon{
  left:163px;
  top:602px;
}
.common{
  position: absolute;
  z-index: 1;
  display: inline-block;
  width: 178px;
  height: 178px;
}
</style>
