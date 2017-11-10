<template>
  <div>
    <div class="title-wrap"><h1 class="title">纯阳宫</h1></div>
    <div class="subtitle"><span>昆仑玄境山外山　　乾坤阴阳有洞天</span></br><span>只问真君何处有　　不向江湖寻剑仙</span></div>
    <div class="description">长安四年（公元704年），吕洞宾在朝廷支持下，于西岳华山建立纯阳观。玄宗即位后，纯阳得到更大的发展。纯阳现任掌门为李忘生，他与吕洞宾所收的其他四名弟子卓凤鸣、上官博玉、于睿、祁进并称为"纯阳五子"。</div>
    <div class='rebtn' @click="onClick"></div>
   <div class="swiper-wrap">
     <div class="slidtitle"><span></span>怡人景致</div>
    <swiper :options="swiperOption" style="height:100%;">
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/cy1.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
   </swiper-slide>
     <swiper-slide>
       <div>
       <img style="vertical-align:top;width:100%;" src="../assets/cy2.jpg"/>
       <div class="imgtitle">小桥楼水</div>
   </div>
 </swiper-slide>
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/cy3.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
       </swiper-slide>
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/cy4.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
     <swiper-slide>
       <div>
         <img style="vertical-align:top;width:100%;" src="../assets/cy5.jpg"/>
         <div class="imgtitle">小桥楼水</div>
     </div>
     </swiper-slide>
   </swiper>
 </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name:'mobilecy',
  components:{swiper, swiperSlide},
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
  padding-top: 0.32rem;
  padding-left: 0.44rem;
}
.title{
  color:black;
  width:.6rem;
  font-size: 0.58em;
  line-height: 1;
  margin: 0;
}
.subtitle{
  text-align: center;
  color: black;
  font-size: 0.33em;
}
.description{
  font-size: 0.2em;
  color: black;
  padding-left: 3.77rem;
  padding-top: .21rem;
}
.slidtitle{
  width:0.32rem;
  font-size: 0.32em;
  color:rgb(210,210,210);
  position: absolute;
  left: -0.6rem;
  top:0rem;

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
 position: relative;
 margin-top: .4rem;
 margin-left: 3rem;
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
