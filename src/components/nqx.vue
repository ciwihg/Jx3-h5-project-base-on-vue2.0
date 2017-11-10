<template>
  <div class="bg">
    <div class="title-wrap">
      <h1 class="title">七秀</h1>
      <div class="subtitle">西子湖畔西子情　　楼外楼中雨霖铃</br>画廊绣舫霓裳舞　　小桥流水叶娉婷</div>
    </div>
    <div class="description">神龙年间，武林中出现了一名奇女子，人称公孙大娘，她在瘦西湖畔创立了忆盈楼，将剑舞绝艺发扬光大。</br>
十余年后，她们所收七名孤女在江湖中赫赫有名，故名"七秀"，</br>
忆盈楼也更名为七秀坊。一时间，七秀坊成为与万花谷、</br>
长歌门齐名的大唐三大风雅之地</div>
<div class="below-wrap">
<div class="slidtitle"><span></span>怡人景致</div>
<div class="swiper-wrap">
  <swiper :options="swiperOption" style="height:100%;">
   <swiper-slide>
     <img style="vertical-align:top;" src="../assets/qx1.jpg"/>
   <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   <swiper-slide><img style="vertical-align:top;" src="../assets/qx2.jpg"/>
   <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   <swiper-slide><img style="vertical-align:top;" src="../assets/qx3.jpg"/>
   <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   <swiper-slide><img style="vertical-align:top;" src="../assets/qx4.jpg"/>
   <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   <swiper-slide><img style="vertical-align:top;" src="../assets/qx5.jpg"/>
   <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
 </swiper>
 </div>
</div>
<div class='rebtn'></div>
</div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'nqx',
  components:{swiper, swiperSlide},
  data:function () {
    return{
      swiperOption:{
          spaceBetween: 10,
          direction: 'vertical',
           slidesPerView: 2,
           autoplay: 800
      }
    }

  }
}
</script>

<style scoped>
.bg{
  background: url("../assets/qx-m.jpg") center top no-repeat;
}
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  width:188px;
  height: 118px;
  position: absolute;
  left:970px;
  top:13px;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.title-wrap{

}
.subtitle{
color: #f48fb1;
font-size: 24px;
display: inline-block;
vertical-align: bottom;
line-height: 1.8;
margin-left: 70px;
margin-bottom: 10px;
}
.title{
  color: #f48fb1;
  font-size: 60px;
  margin: 0;
  width:63px;
  line-height: 1;
  display: inline-block;
  vertical-align: bottom;
  margin-left: 75px;
  margin-top: 50px;
}
.description{
  color: #f8bbd0;
  font-size: 14px;
  padding: 54px 0px 0px 600px;

}
.slidtitle{
  display: inline-block;
  width:43px;
  font-size:40px;
  color:#600b0b;
  vertical-align: top;
  line-height: 1;
  margin-left: 600px;
}
.slidtitle span{
  display:inline-block;
  width:40px;
  height:20px;
  background-color:#600b0b;
  vertical-align: top;
}
.below-wrap{
  margin-top: 30px;
}
.swiper-wrap{
  display: inline-block;
  height: 725px;
  margin-left: 50px;
}
</style>
