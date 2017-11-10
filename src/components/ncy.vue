<template>
  <div class="bg">
    <div class="title">纯阳宫</div>
    <div class="subtitle">昆仑玄境山外山　　乾坤阴阳有洞天</br>只问真君何处有　　不向江湖寻剑仙</div>
    <div class="description">长安四年（公元704年），吕洞宾在朝廷支持下，</br>
于西岳华山建立纯阳观。玄宗即位后，纯阳得到</br>
更大的发展。纯阳现任掌门为李忘生，他与吕洞宾</br>
所收的其他四名弟子卓凤鸣、上官博玉、</br>
于睿、祁进并称为"纯阳五子"。</div>
    <div class='rebtn'></div>
    <div class="slidtitle"><span></span>怡人景致</div>
    <div class="photowrap">
     <swiper :options="swiperOption">
      <swiper-slide>
        <img style="vertical-align:top;" src="../assets/cy1.jpg"/>
      <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
      <swiper-slide><img style="vertical-align:top;" src="../assets/cy2.jpg"/>
      <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
      <swiper-slide><img style="vertical-align:top;" src="../assets/cy3.jpg"/>
      <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
      <swiper-slide><img style="vertical-align:top;" src="../assets/cy4.jpg"/>
      <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
      <swiper-slide><img style="vertical-align:top;" src="../assets/cy5.jpg"/>
      <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
    </swiper>
  </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:"ncy",
  components:{swiper, swiperSlide},
  data:function () {
    return {
      popoption:{
        iconx:300,
        icony:360,
        localx:480,
        localy:600,
        range:2800,
        iconsize:150,
        bgname:'cy.jpg',
        bgmain:'cy-m.jpg',
        unit:'px'
      },
      swiperOption:{
         paginationClickable: true,
           slidesPerView: 2,
           autoplay: 800
      }
    }
  }
}
</script>

<style scoped>
.bg{
  background: url("../assets/cy-m.jpg") center top no-repeat;
}
.title{
  position: relative;
  left: 90px;
  top:68px;
  font-size: 70px;
  color:black;
}
.subtitle{
  position: relative;
  left: 161px;
  top:121px;
  font-size: 24px;
  color: black;
}
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  width:188px;
  height: 118px;
  position: absolute;
  left:1000px;
  top:600px;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.description{
  position: relative;
  left: 496px;
  top:185px;
  color:#9b9696;
  font-size:14px;

}
.slidtitle{
  width:43px;
  font-size:40px;
  color:rgb(210,210,210);
  position:absolute;
  left:39px;
  top:749px;
}
.slidtitle span{
  display:inline-block;
  width:40px;
  height:20px;
  background-color:rgb(210,210,210);
}
.photowrap{
  position: relative;
  width:950px;
  top:500px;
  left: 155px;
}
</style>
