<template>
  <div class="bg">
    <div class="column-left">
      <div class="slidtitle"><span></span>怡人景致</div>
      <div class="swiper-wrap">
        <swiper :options="swiperOption" style="height:100%;">
         <swiper-slide>
           <img style="vertical-align:top;" src="../assets/sl1.jpg"/>
         <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
         <swiper-slide><img style="vertical-align:top;" src="../assets/sl2.jpg"/>
         <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
         <swiper-slide><img style="vertical-align:top;" src="../assets/sl3.jpg"/>
         <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
         <swiper-slide><img style="vertical-align:top;" src="../assets/sl4.jpg"/>
         <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
         <swiper-slide><img style="vertical-align:top;" src="../assets/sl5.jpg"/>
         <div style="background-color:rgba(0,0,0,.6);width:440px; padding:15px 0px;"><span style="display:inline-block; color:#d1c4e9; margin-left:15px;">山间一角</span></div></swiper-slide>
       </swiper>
      </div>
    </div>
    <div class="column-right">
      <h1 class="title">少林</h1>
      <div class="subtitle">
        <div><span>古刹紫竹禅钟鸣</span><span>佛音亦有豪情意</span></div>
        <div style="margin-top:46px;"><span>降妖伏魔江湖行</span><span>天下武功出少林</span></div>
      </div>
        <div class="description">
          <span>少林与李姓王朝有着不解之缘 。 唐武德三年 ， 惠锡 、 昙宗等</span>
          <span>三名武僧因不满王仁则侵占少林寺封地 ，</br>" 率众以拒伪师 "。</span>
          <span>十三武僧夜间攻入郑兵大营 ， 生擒王仁则 ， </span>
          <span>献于李世民 ， 为秦王统一全国立下了汗马功劳 。 </span>

        </div>
    </div>
    <div class='rebtn'></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'nsl',
  components:{swiper, swiperSlide},
  data:function () {
    return{
      swiperOption:{
          spaceBetween: 30,
          direction: 'vertical',
           slidesPerView: 3,
           autoplay: 800
      }
    }

  }
}
</script>

<style scoped>
.bg{
  background: url("../assets/sl-m.jpg") center top no-repeat;
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
.column-left{
 padding:69px 0px 0px 46px;
 display: inline-block;
 vertical-align: top;
}
.column-right{
  padding-top:69px;
 padding-left: 253px;
 display: inline-block;
 vertical-align: top;
}
.title{
  font-size: 60px;
  margin: 0;
  width: 63px;
  line-height: 1;
  color: #4e342e;
}
.subtitle{
  margin-left: 106px;
  margin-top: 13px;
}
.subtitle span{
  display: inline-block;
  font-size: 20px;
  width: 20px;
  margin-left: 16px;
  color: #4e342e;
}
.description{
  position: relative;
  left:212px;
  top:68px;
}
.description span{
  display: inline-block;
  font-size: 14px;
  width: 14px;
  color: #8d6e63;
  vertical-align: top;
  line-height: 1;
}
.slidtitle{
  display: inline-block;
  width:43px;
  font-size:40px;
  color:rgb(0,0,0);
  vertical-align: top;
  line-height: 1;
}
.slidtitle span{
  display:inline-block;
  width:40px;
  height:20px;
  background-color:rgb(0,0,0);
  vertical-align: top;

}
.swiper-wrap{
  display: inline-block;
 margin-left: 42px;
 height: 1010px;
}
</style>
