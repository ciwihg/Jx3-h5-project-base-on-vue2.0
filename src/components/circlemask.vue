<template>
    <canvas ref="ctx" class="canva" >
    </canvas>
</template>

<script>
import cwh from './commonwh.vue'
import ccy from './commoncy.vue'
export default{
  name:'circlemask',
  components:{cwh,ccy},
  props:['option','open'],
  data:function () {
    return{
      r:0,
      img:null,
      ctx:null,
      bgowidth:768,
      bgoheight:1364,
      bgfile:'dist/mobilebg1.jpg',
      kp:0,
      wh:false,
      cy:false,
      covers:[
        {bg:'mwhbg',cx:2.38,cy:1.46,enable:false},
        {bg:'mcybg',cx:5.6,cy:2.16,enable:false}
      ],
      pagenodes:[],
      btncache:0,
      mobile:null,
      maskwidth:0,
      maskheight:0
    }
  },
  created:function () {
    var reg=/Mobile/;
    var device=navigator.userAgent;
    if(device.search(reg)!=-1){
      this.mobile=true;
      this.kp=document.documentElement.clientWidth/768*100;
      document.documentElement.style.fontSize=this.kp+'px';
    }else{
      this.mobile=false;
      this.kp=1;
    }
      //this.kp=document.documentElement.clientWidth/768*100;
      //document.documentElement.style.fontSize=this.kp+'px';

  },
  watch:{
    open:function (n) {
      if(n){
      this.drawOneFrame(this.ctx,this.kp*this.option.cx,this.kp*this.option.cy,this.kp*0.63,this.option.range);
    }
    else{
      this.$refs.ctx.style.display="block";
      this.drawOneFrame(this.ctx,this.kp*this.option.cx,this.kp*this.option.cy,this.option.range,this.kp*0.63);
    }
    }
  },
  methods:{
    init:function(){
      this.setBackgroundSize();
      this.ctx=this.$refs.ctx.getContext('2d');
      this.img = new Image();
      var that=this;
    this.img.onload = function(){
     that.drawBackground(that.img,that.ctx,that.option.maskimgwidth,that.option.maskimgheight,that.maskwidth,that.maskheight);
    }
    this.img.src = this.option.maskimg;
  },
  setBackgroundSize:function () {
    if(this.mobile){
      this.$refs.ctx.width=this.maskwidth=window.innerWidth;
      this.$refs.ctx.height=this.maskheight=1.77*window.innerWidth;
     }
     else{
       this.$refs.ctx.width=this.maskwidth=this.option.maskwidth;
       this.$refs.ctx.height=this.maskheight=this.option.maskheight;
     }
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
        (status=='open')?(that.$refs.ctx.style.display="none"):(that.$router.push({name:'t1'}))
        return;
      }
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
      that.drawBackground(that.img,ctx,that.option.maskimgwidth,that.option.maskimgheight,that.maskwidth,that.maskheight);
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
    this.$refs.wh.style.display="none";
    this.btncache=e.target.getAttribute('btn');
    this.onChangePage(this.btncache);
    this.$refs.cc.appendChild(this.pagenodes[this.btncache]);
    this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,this.kp*0.63,500);
  },
  onPclose:function(e){
    if(e.target.className=="rebtn"){
    this.$refs.wh.style.display="block";
    this.drawOneFrame(this.ctx,this.kp*this.covers[this.btncache].cx,this.kp*this.covers[this.btncache].cy,500,0,this.btncache);}
  },
  onChangePage:function (btn){
    this.$refs.bgcover.style.backgroundImage="url('/dist/"+this.covers[btn].bg+".jpg')";
  },
  runAnimation:function () {
    this.drawOneFrame(this.ctx,this.kp*this.option.cx,this.kp*this.option.cy,this.kp*0.63,this.option.range);
  }
},
  mounted:function () {
   this.init();
   //this.getAllPages();

  }
}

</script>

<style>

.bg{
  background:url('../assets/mwhbg.jpg') top no-repeat;
  background-size: 100% auto;
  height: 732px;
}
.canva{
  position: absolute;
  z-index: 12;
  left: 0px;
  top:0px;
}
</style>
