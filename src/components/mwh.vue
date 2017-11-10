<template>
  <pop :s='popoption'>
    <div><h1 class="title">万花谷</h1></div>
    <div class="subtitle"><span>春兰秋菊夏清风　　三星望月挂夜空</span></br><span>不求独避风雨外　　只笑桃源非梦中</span></div>
    <div class="description">大唐开元二十三年，万花谷主东方宇轩游历四方，</br>恍惚间误入秦岭青岩，叹西部山间竟有如此仙处，</br>于是招纳贤士在此隐居，并命之为"万花谷".</div>
    <div class='rebtn'></div>
    <div class='rebtn'></div>
<div class="slidtitle"><span></span>怡人景致</div>
<div style="text-align:center;position:relative; top:4.57rem;">
   <div class="photowrap">
    <swiper :options="swiperOption">
     <swiper-slide>
       <img style="vertical-align:top;width:100%;" src="../assets/1.jpg"/>

   </swiper-slide>
     <swiper-slide><img style="vertical-align:top;width:100%;" src="../assets/2.jpg"/>
    </swiper-slide>
     <swiper-slide><img style="vertical-align:top;width:100%;" src="../assets/4.jpg"/>
     </swiper-slide>
     <swiper-slide><img style="vertical-align:top;width:100%;" src="../assets/5.jpg"/>
     </swiper-slide>
     <swiper-slide><img style="vertical-align:top;width:100%;" src="../assets/6.jpg"/>
     </swiper-slide>
   </swiper>
 </div>
 </div>
  </pop>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pop from './pop.vue'
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
          spaceBetween: 15,
          direction: 'vertical',
          height:400,
           slidesPerView: 2
      }
    }
  }
}
</script>

<style>
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  background-size: 100%;
  width:1.52rem;
  height: 0.8rem;
  position: absolute;
  left:6.16rem;
  top:3.9rem;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.title{
  color:#9575cd;
  position: relative;
  left:0.56rem;
  top:3.82rem;
  font-size: 0.58em;
  margin: 0;
}
.subtitle{
  text-align: center;
  color: #9575cd;
  position: relative;
  top:3.92rem;
  font-size: 0.33em;
}
.description{
  font-size: 0.12em;
  text-align: center;
  color: #d1c4e9;
  position: relative;
  top:4.13rem;
}
.slidtitle{
  width:0.32rem;
  font-size: 0.32em;
  color:rgb(210,210,210);
  position: absolute;
  left: 0.56rem;
  top:6.97rem;

}
.slidtitle span{
  width: 0.32rem;
  height: 0.16rem;
  display: inline-block;
 background-color:rgb(210,210,210);

}
.photowrap{
 width: 4.4rem;
 display: inline-block;
 height: 6.3rem;
 overflow: hidden;
}
.itemtitle{
  background-color:rgba(0,0,0,.6);
  width:4.4rem;
  height:.3rem;
  padding:0.15rem 0px;
}
.itemtitle span{
  top:0;
}
</style>
