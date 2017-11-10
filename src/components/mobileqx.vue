<template>
  <div :style="{height:ph}">
    <div class="title-wrap"><h1 class="title">七秀</h1></div>
    <div class="subtitle">西子湖畔西子情　　楼外楼中雨霖铃</br>画廊绣舫霓裳舞　　小桥流水叶娉婷</div>
    <div class="description">神龙年间，武林中出现了一名奇女子，人称公孙大娘，她在瘦西湖畔创立了忆盈楼，将剑舞绝艺发扬光大。十余年后，她们所收七名孤女在江湖中赫赫有名，故名"七秀"，忆盈楼也更名为七秀坊。一时间，七秀坊成为与万花谷、长歌门齐名的大唐三大风雅之地。</div>
    <div class="swiper-wrap">
      <div class="slidtitle"><span></span>怡人景致</div>
      <swiper :options="swiperOption" style="height:100%;">
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/qx1.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
     </swiper-slide>
       <swiper-slide>
         <div>
         <img style="vertical-align:top;width:100%;" src="../assets/qx2.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
   </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/qx3.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
         </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/qx4.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
       </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/qx5.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
       </swiper-slide>
     </swiper>
    </div>
        <div class='rebtn' @click="onClick"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'mobileqx',
  components:{swiper, swiperSlide },
  data:function () {
    return{
      ph:0,
      swiperOption:{
          direction: 'vertical',
           slidesPerView: 2,
           autoplay: 800
      }
    }
  },
  created:function(){
    this.ph=window.innerWidth*1.77+'px';
  },
  methods:{
    onClick:function () {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.slidtitle{
  width:0.32rem;
  font-size: 0.32em;
  color:#f8bbd0;
  position: absolute;
  left: -0.6rem;
  top:0rem;

}
.slidtitle span{
  width: 0.32rem;
  height: 0.16rem;
  display: inline-block;
  vertical-align: top;
 background-color:#f8bbd0;

}
.rebtn{
  background:url("../assets/return-btn.png") center top no-repeat;
  background-size: 100%;
  width:1.52rem;
  height: 0.8rem;
  position: absolute;
  left:6.16rem;
  top:.37rem;
  cursor: pointer;
}
.rebtn:hover{
  opacity: .5;

}
.title-wrap{
  padding: .48rem 0 0 .7rem;
}
.title{
  font-size: .58em;
  width: .6rem;
  line-height: 1;
  margin: 0;
  color:#f48fb1;
}
.subtitle{
  color:#f48fb1;
  font-size: .3em;
  text-align: center;
  margin-top: .2rem;
}
.description{
  color: #f8bbd0;
  font-size: .24em;
  margin: 0 auto;
  margin-top: .58rem;
  width: 90%;
  text-align: center;
}
.swiper-wrap{
  width: 4.4rem;
  height: 6.86rem;
  margin: 0 auto;
  margin-top: .87rem;
  position: relative;
}
.imgtitle{
  background-color:rgba(0,0,0,.6);
  font-size:.2em;
  text-align:left;
  padding:.1rem .2rem;
  color:#d1c4e9;
}
</style>
