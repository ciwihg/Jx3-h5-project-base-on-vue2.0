<template>
  <div>
    <div class="title-wrap"><h1 class="title">万花谷</h1></div>
    <div class="subtitle"><span>春兰秋菊夏清风　　三星望月挂夜空</span></br><span>不求独避风雨外　　只笑桃源非梦中</span></div>
    <div class="description">大唐开元二十三年，万花谷主东方宇轩游历四方，</br>恍惚间误入秦岭青岩，叹西部山间竟有如此仙处，</br>于是招纳贤士在此隐居，并命之为"万花谷".</div>
    <div class='rebtn' @click="onClick"></div>
   <div class="swiper-wrap">
     <div class="slidtitle"><span></span>怡人景致</div>
    <swiper :options="swiperOption" style="height:100%;">
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/1.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/2.jpg"/>
         <div class="imgtitle">小桥楼水</div>
       </div>
     </swiper-slide>
     <swiper-slide>
      <div>
        <img style="vertical-align:top;width:100%;" src="../assets/4.jpg"/>
       <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/5.jpg"/>
       <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
     <swiper-slide>
        <div>
        <img style="vertical-align:top;width:100%;" src="../assets/6.jpg"/>
       <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
   </swiper>
 </div>

  </div>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'mobilewh',
  components:{swiper, swiperSlide},
  data:function () {
    return{
      swiperOption:{
          direction: 'vertical',
           slidesPerView:2,
           autoplay: 800

      }
    }
  },
  methods:{
    onClick:function () {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
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
.title-wrap{
  padding-left: 0.56rem;
  padding-top: 3.82rem;
}
.title{
  color:#9575cd;
  font-size: 0.58em;
  margin: 0;
}
.subtitle{
  text-align: center;
  color: #9575cd;
  font-size: 0.33em;
  margin-top: .1rem;
}
.description{
  font-size: 0.24em;
  text-align: center;
  color: #d1c4e9;
  margin-top:0.1rem;
}
.slidtitle{
  width:0.32rem;
  font-size: 0.32em;
  color:rgb(210,210,210);
  position: absolute;
  left: -0.6rem;

}
.slidtitle span{
  width: 0.32rem;
  height: 0.16rem;
  display: inline-block;
 background-color:rgb(210,210,210);
 vertical-align: top;

}
.swiper-wrap{
 width: 4.4rem;
 height: 6.2rem;
 width:4.4rem;
 margin: 0 auto;
 margin-top: .3rem;
 position: relative;
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
.imgtitle{
  background-color:rgba(0,0,0,.6);
  font-size:.2em;
  text-align:left;
  padding:.1rem .2rem;
  color:#d1c4e9;
}
</style>
