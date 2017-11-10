<template>
  <div>
    <div class="title-wrap"><h1 class="title">少林</h1></div>
    <div class="subtitle">古刹紫竹禅钟鸣　　降妖伏魔江湖行</br>佛音亦有豪情意　　天下武功出少林</div>
    <div class="description">少林与李姓王朝有着不解之缘。唐武德三年，惠锡、昙宗等十三名武僧因不满王仁则侵占少林寺封地，"率众以拒伪师"。十三武僧夜间攻入郑兵大营，生擒王仁则，献于李世民，为秦王统一全国立下了汗马功劳。</div>
    <div class="swiper-wrap">
      <div class="slidtitle"><span></span>怡人景致</div>
      <swiper :options="swiperOption" style="height:100%;">
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/sl1.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
     </swiper-slide>
       <swiper-slide>
         <div>
         <img style="vertical-align:top;width:100%;" src="../assets/sl2.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
   </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/sl3.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
         </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/sl4.jpg"/>
           <div class="imgtitle">小桥楼水</div>
       </div>
       </swiper-slide>
       <swiper-slide>
         <div>
           <img style="vertical-align:top;width:100%;" src="../assets/sl5.jpg"/>
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
  name:'mobilesl',
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
  color:#d7ccc8;
  position: absolute;
  left: -0.6rem;
  top:0rem;

}
.slidtitle span{
  width: 0.32rem;
  height: 0.16rem;
  display: inline-block;
 background-color:#d7ccc8;
 vertical-align: top;

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
  padding: .52rem 0 0 .6rem;
}
.title{
  font-size: 0.58em;
  color:#4e342e;
  margin: 0;
  line-height: 1;
}
.subtitle{
  margin-top: .58rem;
  font-size: 0.3em;
  text-align: center;
  color:#4e342e
}
.description {
    font-size: 0.24em;
    color:#a1887f;
    width:90%;

    margin: 0 auto;
      margin-top: .4rem;
}
.swiper-wrap{
  width: 4.4rem;
  height:6.86rem;
  margin-left: 3.05rem;
  margin-top: 1.91rem;
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
