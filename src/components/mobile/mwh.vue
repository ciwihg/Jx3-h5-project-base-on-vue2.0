<template>
  <pop :s='popoption'>
    <div><h1 class="title">万花谷</h1></div>
    <div class="subtitle"><span>春兰秋菊夏清风　　三星望月挂夜空</span></br><span>不求独避风雨外　　只笑桃源非梦中</span></div>
    <div class="description">大唐开元二十三年，万花谷主东方宇轩游历四方，恍惚间误入秦岭青岩，</br>
叹西部山间竟有如此仙处，于是招纳贤士在此隐居，并命之为"万花谷".</div>
    <div class='rebtn'></div>
<div class="slidtitle"><span></span>怡人景致</div>
   <div class="photowrap">
    <swiper :options="swiperOption">
     <swiper-slide>
       <img style="vertical-align:top;" src=".../assets/1.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src=".../assets/2.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src=".../assets/4.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src=".../assets/5.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src=".../assets/6.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   </swiper>
 </div>
  </pop>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pop from '../pop.vue'
export default{
  name:'mwh',
  components:{pop,swiper, swiperSlide},
  data:function () {
    return{
      popoption:{
        iconx:1.39,
        icony:5.8,
        localx:4.80,
        localy:6.00,
        range:28.00,
        iconsize:1.50,
        bgname:'wh.jpg',
        bgmain:'mwhbg.jpg',
        unit:'rem'
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

<style>
</style>
