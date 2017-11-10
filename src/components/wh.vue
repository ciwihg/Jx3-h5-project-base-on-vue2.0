<template>
  <pop :s="popoption">
    <div><h1 class="title">万花谷</h1></div>
    <div class="subtitle"><span>春兰秋菊夏清风　　三星望月挂夜空</span></br><span>不求独避风雨外　　只笑桃源非梦中</span></div>
    <div class="description">大唐开元二十三年，万花谷主东方宇轩游历四方，恍惚间误入秦岭青岩，</br>
叹西部山间竟有如此仙处，于是招纳贤士在此隐居，并命之为"万花谷".</div>
    <div class='rebtn'></div>
<div class="slidtitle"><span></span>怡人景致</div>
   <div class="photowrap">
    <swiper :options="swiperOption">
     <swiper-slide>
       <img style="vertical-align:top;" src="../assets/1.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/2.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/4.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/5.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/6.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   </swiper>
 </div>
  </pop>
</template>

<script>
import pop from './pop.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:"wh",
  components:{pop,swiper,swiperSlide},
  data:function(){
    return{
      popoption:{
        iconx:100,
        icony:660,
        localx:480,
        localy:600,
        range:2800,
        iconsize:250,
        bgname:'wh.jpg',
        bgmain:'wh-m.jpg',
        unit:'px'
      },
      swiperOption:{
        pagination: '.swiper-pagination',
         paginationClickable: true,
          spaceBetween: 30,
          direction: 'vertical',
          height:600,
           slidesPerView: 2
      }
    }
  }
}
</script>

<style scoped>
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  width:188px;
  height: 118px;
  position: absolute;
  left:1000px;
  top:10px;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.title{
  margin-top:0px;
  left:547px;
  top:37px;
  position:relative;
  color:#9575cd;
  font-size:66px;
}
.subtitle{
  left:628px;
  top:24px;
  font-size:24px;
  color:#9575cd;
  position:relative;
}
.description{
  left:688px;
  top:38px;
  font-size:14px;
  color:#d1c4e9;
  position:relative;
}
.slidtitle{
  width:43px;
  font-size:40px;
  color:rgb(210,210,210);
  position:absolute;
  left:546px;
  top:327px;
}
.slidtitle span{
  display:inline-block;
  width:40px;
  height:20px;
  background-color:rgb(210,210,210);
}
.photowrap{
  height:660px;
  overflow:hidden;
  left:667px;
  position:relative; top:10%;
}
</style>
