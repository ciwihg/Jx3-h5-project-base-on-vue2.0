<template>
  <div ref="bgcover" class="bg">
    <canvas ref="ctx" class="canva" >
    </canvas>
    <cwh v-if="covers[0].enable" @close="onPclose"></cwh>
    <ccy v-if="covers[1].enable" @close="onPclose"></ccy>
    <ctc v-if="covers[2].enable" @close="onPclose"></ctc>
    <csl v-if="covers[3].enable" @close="onPclose"></csl>
    <cqx v-if="covers[4].enable" @close="onPclose"></cqx>
    <div class="whicon"  btn="0" @click="onClick" v-if="showbtns"></div>
    <brand class="whbrand" v-if="covers[0].enable" :content="'万花'" :mobile="true" @finish="onTextFinish"></brand>
    <div class="cyicon"  btn="1" @click="onClick" v-if="showbtns"></div>
    <brand class="cybrand" v-if="covers[1].enable" :content="'纯阳'" :mobile="true" @finish="onTextFinish"></brand>
    <div class="tcicon"  btn="2" @click="onClick" v-if="showbtns"></div>
    <brand class="tcbrand" v-if="covers[2].enable" :content="'天策'" :mobile="true" @finish="onTextFinish"></brand>
    <div class="slicon"  btn="3" @click="onClick" v-if="showbtns"></div>
    <brand class="slbrand" v-if="covers[3].enable" :content="'少林'" :mobile="true" @finish="onTextFinish"></brand>
    <div class="qxicon"  btn="4" @click="onClick" v-if="showbtns"></div>
    <brand class="qxbrand" v-if="covers[4].enable" :content="'七秀'" :mobile="true" @finish="onTextFinish"></brand>
  </div>
</template>

<script>
import cwh from './mobilewh.vue'
import ccy from './mobilecy.vue'
import ctc from './mobiletc.vue'
import csl from './mobilesl.vue'
import cqx from './mobileqx.vue'
import brand from './text.vue'
export default{
  name:'test',
  components:{cwh,ccy,ctc,csl,cqx,brand},
  data:function () {
    return{
      r:0,
      img:null,
      path:'/public/jx3/assets/',
      showbtns:true,
      ctx:null,
      bgowidth:768,
      bgoheight:1364,
      bgfile:'mobilebg1.jpg',
      kp:0,
      covers:[
        {bg:'mwhbg',cx:5.41,cy:1.28,enable:false},
        {bg:'mcybg',cx:2.49,cy:3.64,enable:false},
        {bg:'mtcbg',cx:1.17,cy:7.3,enable:false},
        {bg:'mslbg',cx:2.16,cy:10.42,enable:false},
        {bg:'mqxbg',cx:4.67,cy:12.28,enable:false},
      ],
      btncache:0
    }
  },
  created:function () {
      this.kp=document.documentElement.clientWidth/768*100;
      document.documentElement.style.fontSize=this.kp+'px';

  },
  methods:{
    init:function(){
      this.setBackgroundSize();
      this.ctx=this.$refs.ctx.getContext('2d');
      this.img = new Image();
      var that=this;
    this.img.onload = function(){
     that.drawBackground(that.img,that.ctx,that.bgowidth,that.bgoheight,window.innerWidth,1.776*window.innerWidth);

    }
    this.img.src = this.path+this.bgfile;

  },
  setBackgroundSize:function () {
    this.$refs.ctx.width=window.innerWidth;
    this.$refs.ctx.height=1.77*window.innerWidth;
  },
  drawBackground:function (img,ctx,owidth,oheight,twidth,theight) {
    ctx.drawImage(img,0,0,owidth,oheight,0,0,twidth,theight);
  },
  drawOneFrame:function (ctx,x,y,oradius,aradius,btnid) {
     var that=this;
     var status;
    (oradius<aradius)?(status='open'):(status='close',this.$refs.ctx.style.display="block");
    +function draw(){
      if(Math.abs(oradius-aradius)<10){
        (status=='open')?(that.$refs.ctx.style.display="none"):(that.covers[btnid].enable=false,that.showbtns=true)
        return;
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
      that.drawBackground(that.img,ctx,that.bgowidth,that.bgoheight,window.innerWidth,1.776*window.innerWidth);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,165,255,1)";
      (status=='open')?(oradius=oradius+10):(oradius=oradius-10)
      ctx.arc(x, y,oradius, 0,2*Math.PI);
      ctx.closePath();
      ctx.fill();
      window.requestAnimationFrame(draw);
    }();

  },
  onClick:function (e) {
    //this.$refs.wh.style.display="none";
    this.showbtns=false;
    this.btncache=e.target.getAttribute('btn');
    this.onChangePage(this.btncache);
    this.covers[this.btncache].enable=true;
    //this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,this.kp*0.63,500);
  },
  onPclose:function(){
  //  this.$refs.wh.style.display="block";
  this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,500,0,this.btncache);
  },
  onChangePage:function (btn){
    this.$refs.bgcover.style.backgroundImage="url('"+this.path+this.covers[btn].bg+".jpg')";
  },
  onTextFinish:function () {
    this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,this.kp*0.63,500);
  }
},
  mounted:function () {
   this.init();
  }
}

</script>

<style>
body{
  width: 100%;
  margin: 0;
}
.whicon{
  position: absolute;
  left: 4.59rem;
  top:0.59rem ;
  width:1.8rem;
  height: 1.8rem;
  z-index: 14;
}
.whbrand{
  left: 6.29rem;
  top:  0.09rem;
}
.cyicon{
  position: absolute;
  left: 1.65rem;
  top:2.8rem ;
  width:1.8rem;
  height: 1.8rem;
  z-index: 14;
}
.cybrand{
  left: 3.35rem;
  top:  2rem;
}
.tcicon{
  position: absolute;
  left: .37rem;
  top:6.56rem ;
  width:1.8rem;
  height: 1.8rem;
  z-index: 14;
}
.tcbrand{
  left: 2.07rem;
  top:  5.76rem;
}
.slicon{
  position: absolute;
  left: 1.42rem;
  top:9.64rem ;
  width:1.8rem;
  height: 1.8rem;
  z-index: 14;
}
.slbrand{
  left: 3.12rem;
  top:  8.84rem;
}
.qxicon{
  position: absolute;
  left: 3.87rem;
  top:11.47rem ;
  width:1.8rem;
  height: 1.8rem;
  z-index: 14;
}
.qxbrand{
  left: 5.57rem;
  top:  10rem;
}
.bg{
  /*background:url('../assets/mwhbg.jpg') top no-repeat;*/
  background-size: 100% auto;

}
.canva{
  position: absolute;
  z-index: 12;
}
</style>
