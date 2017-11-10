<template>

  <div ref="bgcover" class="bg" @click="onPclose" @transitionend="onTransitionEnd">
    <canvas ref="ctx" class="canva" >
    </canvas>
    <nwh v-if="covers[0].enable" @click="onPclose"></nwh>
    <ncy v-if="covers[1].enable" @click="onPclose"></ncy>
    <ntc v-if="covers[2].enable" @click="onPclose"></ntc>
    <nqx v-if="covers[3].enable" @click="onPclose"></nqx>
    <nsl v-if="covers[4].enable" @click="onPclose"></nsl>
    <div class="whicon common" ref="wh" btn="0" @click="onClick" v-if="showbtns"></div>
    <brand class="whbrand" v-if="covers[0].enable" :content="'万花'" @finish="onTextFinish"></brand>
    <div class="cyicon common" ref="cy" btn="1" @click="onClick" v-if="showbtns"></div>
    <brand class="cybrand" v-if="covers[1].enable" :content="'纯阳'" @finish="onTextFinish"></brand>
    <div class="tcicon common" ref="tc" btn="2" @click="onClick" v-if="showbtns"></div>
    <brand class="tcbrand" v-if="covers[2].enable" :content="'天策'" @finish="onTextFinish"></brand>
    <div class="qxicon common" ref="qx" btn="3" @click="onClick" v-if="showbtns"></div>
    <brand class="qxbrand" v-if="covers[3].enable" :content="'七秀'" @finish="onTextFinish"></brand>
    <div class="slicon common" ref="sl" btn="4" @click="onClick" v-if="showbtns"></div>
    <brand class="slbrand" v-if="covers[4].enable" :content="'少林'" @finish="onTextFinish"></brand>
  </div>

</template>

<script>
import nwh from './nwh.vue'
import ncy from './ncy.vue'
import ntc from './ntc.vue'
import nqx from './nqx.vue'
import nsl from './nsl.vue'
import brand from './text.vue'
export default{
  name:'pc',
  components:{nwh,ncy,ntc,nqx,nsl,brand},
  data:function () {
    return{
      path:'/public/jx3/assets/',
      r:0,
      img:null,
      ctx:null,
      bgowidth:1200,
      showbtns:true,
      bgoheight:1080,
      bgfile:'cover-m.jpg',
      kp:0,
      covers:[
        {bg:'wh-m',cx:247,cy:684,enable:false,bodybg:'wh'},
        {bg:'cy-m',cx:358,cy:467,enable:false,bodybg:'cy'},
        {bg:'tc-m',cx:703,cy:124,enable:false,bodybg:'tc'},
        {bg:'qx-m',cx:301,cy:926,enable:false,bodybg:'qx'},
        {bg:'sl-m',cx:517,cy:276,enable:false,bodybg:'sl'}
      ],
      btncache:0
    }
  },
  created:function () {
    var reg=/Mobile/;
    var device=navigator.userAgent;
    if(device.search(reg)!=-1){
      this.$router.push({name:'mobile'});
      return;
    }
      this.kp=1;
      //document.documentElement.style.fontSize=this.kp+'px';

  },
  methods:{
    init:function(){
      this.setBackgroundSize();
      this.ctx=this.$refs.ctx.getContext('2d');
      this.img = new Image();
      var that=this;
    this.img.onload = function(){
     that.drawBackground(that.img,that.ctx,that.bgowidth,that.bgoheight,1200,1080);

    }
    this.img.src = this.path+this.bgfile;

  },
  setBackgroundSize:function () {
    this.$refs.ctx.width=1200;
    this.$refs.ctx.height=1080;
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
      that.drawBackground(that.img,ctx,that.bgowidth,that.bgoheight,1200,1080);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,165,255,1)";
      (status=='open')?(oradius=oradius+30):(oradius=oradius-30)
      ctx.arc(x, y,oradius, 0,2*Math.PI);
      ctx.closePath();
      ctx.fill();
      window.requestAnimationFrame(draw);
    }();

  },
  onClick:function (e) {
    this.showbtns=false;
    this.btncache=e.target.getAttribute('btn');
    //this.onChangePage(this.btncache);
    this.covers[this.btncache].enable=true;
    //this.setBodyBg();
    //this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,0,1200);
    //this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,0,1200)
  ;
  },
  onPclose:function(e){
  if(e.target.className=='rebtn')
  {
   this.resetBodyBg()
  this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,1200,0,this.btncache);}
  },
  onChangePage:function (btn){
    this.$refs.bgcover.style.backgroundImage="url('"+this.path+this.covers[btn].bg+".jpg')";
  },
  resetBodyBg:function(){
    document.body.style.backgroundImage="url('"+this.path+"ncover.jpg')";
  },
  setBodyBg:function(){
    document.body.style.backgroundImage="url('"+this.path+this.covers[this.btncache].bodybg+".jpg')";
  },
  onTransitionEnd:function (e) {
    if(e.propertyName=="background-image"){
    this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,0,1200);
  }
},
  onTextFinish:function () {
    this.setBodyBg();
    this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,0,1200);
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
  height: 1080px;
  margin: 0;
  background:url('../assets/ncover.jpg') top no-repeat;
  transition: background 1000ms;
}
@media screen and (max-width:768px) {
  body{
    margin:0;
    width: 100%;
    height: 100%;
    background: white;
    overflow-x: hidden;
  }
}
</style>
<style scoped>
.whicon{
  position: absolute;
  left: 163px;
  top:602px ;
  width:178px;
  height: 178px;
  z-index: 14;
}
.whbrand{
  left: 363px;
  top:522px ;
}
.common{
  cursor: pointer;
}
.cyicon{
  position: absolute;
  left: 270px;
  top:381px ;
  width:178px;
  height:178px;
  z-index: 14;
}
.cybrand{
  left: 470px;
  top:301px ;
}
.tcicon{
  position: absolute;
  left: 613px;
  top:30px ;
  width:178px;
  height:178px;
  z-index: 14;
}
.tcbrand{
  left: 813px;
  top:30px ;
}
.qxicon{
  position: absolute;
  left: 206px;
  top:830px ;
  width:178px;
  height:178px;
  z-index: 14;
}
.qxbrand{
  left: 406px;
  top:750px ;
}
.slicon{
  position: absolute;
  left:420px;
  top:185px ;
  width:178px;
  height:178px;
  z-index: 14;
}
.slbrand{
  left: 620px;
  top:105px ;
}
.bg{
  background:url('../assets/cover-m.jpg') top no-repeat;
  width:1200px;
  height: 1080px;
  margin: 0 auto;
  position: relative;
  transition: background 100ms;
}
.canva{
  position: absolute;
  z-index: 12;
}
</style>
