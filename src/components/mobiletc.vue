<template>
  <div>
    <div class="title-wrap"><h1 class="title">天策</h1></div>
    <div class="subtitle">长河落日东都城　　铁马戍边将军坟</br>尽诛宵小天策义　　长枪独守大唐魂</div>
    <div class="description">天策府是大唐统管江湖事务之部队。他们心中并没有真正意义上的正邪善恶。只坚持以李唐王朝为本的信念。为了维护大唐的安定，他们愿遇神杀神，遇佛杀佛，即使身陷入万劫不复也在所不惜。</div>
    <div class="swiper-wrap">
      <div class="slidtitle"><span></span>怡人景致</div>
      <swiper :options="swiperOption" style="height:100%;">
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/tc1.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
     </swiper-slide>
       <swiper-slide>
         <div>
         <img style="vertical-align:top;width:100%;" src="../assets/tc2.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
   </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/tc3.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
         </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/tc4.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
       </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/tc5.jpg"/>
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
  name:'mobilemtc',
  components:{swiper, swiperSlide },
  data:function () {
    return{
      swiperOption:{
          direction: 'vertical',
           slidesPerView: 2,
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
.slidtitle{
  width:0.32rem;
  font-size: 0.32em;
  color:#9e9e9e;
  position: absolute;
  left: -.6rem;
  top:0rem;

}
.slidtitle span{
  width: 0.32rem;
  height: 0.16rem;
  display: inline-block;
 vertical-align: top;
 background-color:#9e9e9e;

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
.title{
  font-size: 0.58em;
  line-height: 1;
  margin: 0;
  color:#f44336;
}
.title-wrap{
  margin-left: .48rem;
  padding-top: .51rem;
}
.subtitle{
  text-align: center;
  color:#ef9a9a;
  font-size: .3em;
  margin-top: .45rem;
}
.description{
  text-align: center;
  color:#ef9a9a;
  font-size: .2em;
  width:80%;
  margin: 0 auto;
  margin-top: .4rem;
}
.swiper-wrap{
  width: 4.4rem;
  height:6.92rem;
  margin-left: 2.79rem;
  margin-top: .91rem;
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
