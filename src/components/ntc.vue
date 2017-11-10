<template>
  <div class="bg">
    <div><h1 class="title">天策</h1></div>
    <div class="subtitle">长河落日东都城　　铁马戍边将军坟</br>
尽诛宵小天策义　　长枪独守大唐魂</div>
<div class="below-wrap">
  <div class="slidtitle"><span></span>怡人景致</div><div class="swiper-wrap">
    <swiper :options="swiperOption" style="height:100%;">
     <swiper-slide>
       <img style="vertical-align:top;" src="../assets/tc1.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/tc2.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/tc3.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/tc4.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
     <swiper-slide><img style="vertical-align:top;" src="../assets/tc5.jpg"/>
     <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
   </swiper>
  </div>
  <div class="description-wrap">
    <span class="">天策府是大唐统管江湖事务之部队。他们心中并没有真正意义上的正邪善恶。</span>
    <span class="">只坚持以李唐王朝为本的信念。为了维护大唐的安定，他们愿</span>
    <span class="">遇神杀神，遇佛杀佛，即使身陷入万</span>
    <span class="">劫不复也在所不惜。</span>
  </div>
</div>
<div class='rebtn'></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'ntc',
  components:{swiper, swiperSlide},
  data:function () {
    return{
      swiperOption:{
          spaceBetween: 30,
          direction: 'vertical',
           slidesPerView: 2,
           autoplay: 800
      }
    }

  }
}
</script>

<style scoped>
.t{
/*  background: url('../assets/tcbg.jpg') top center no-repeat;*/
  width: 1200px;
  height: 1080px;

}
.bg{
  background: url("../assets/tc-m.jpg") center top no-repeat;
}
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  width:188px;
  height: 118px;
  position: absolute;
  left:800px;
  top:940px;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.title{
  color:#f44336;
  font-size: 60px;
  width:62px;
  margin: 0;
  position: relative;
  left: 80px;
  top:18px;
  line-height: 1;
}
.subtitle{
  font-size: 24px;
  color: #ef9a9a;
  position: relative;
  left: 99px;
  top:75px;
}
.below-wrap{
 position: relative;
 top:165px;
}
.slidtitle{
  display: inline-block;
  width:43px;
  font-size:40px;
  color:rgb(210,210,210);
  vertical-align: top;
  line-height: 1;
  margin-left: 49px;
}
.slidtitle span{
  display:inline-block;
  width:40px;
  height:20px;
  background-color:rgb(210,210,210);
  vertical-align: top;
}
.swiper-wrap{
  display: inline-block;
  width:440px;
  height: 730px;
  vertical-align: top;
  margin-left: 63px;
}
.description-wrap{
  display: inline-block;
  margin-left: 239px;
}
.description-wrap span{
  display: inline-block;
  width:12px;
  vertical-align: top;
  color:#ffcdd2;
  margin-left: 10px;
  font-size: 14px;
}
</style>
