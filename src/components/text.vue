<template>
  <div class="bgwrap" ref='tope' :style="{width:w,height:h}">
    <div class="txwrap" :style="{left:l,top:t,fontSize:fsize}">
    <span ref="t1" :style="">{{content[0]}}</span></br>
    <span ref="t2" :style="">{{content[1]}}</span>
  </div>
  </div>
</template>

<script>
export default{
  name:'text',
  props:['content','mobile'],
  data:function () {
    return{
     index:0,
     w:"152px",
     h:"350px",
     l:"20px",
     t:"100px",
     fsize:"48px"
    }
  },
  created:function(){
    if(this.mobile!==undefined){
      this.w="1.52rem";
      this.h="3.50rem";
      this.l="0.2rem";
      this.t="1rem";
      this.fsize='.48em';
    }
  },
  mounted:function(){
    var that=this;
    var num=setInterval(function(){
      if(that.index==2){
        clearInterval(num);
        that.$refs.tope.style.display='none';
        that.$emit('finish');
        return;
      }
        ++that.index;
        that.$refs['t'+that.index].className='t';
      },300);
}
}
</script>

<style scoped>
.txwrap{
  position: relative;
}
.bgwrap{
  position: absolute;
  z-index: 14;
  background: url('../assets/txbg.png') center top no-repeat;
  background-size: 100% auto;
}
span{
  display: inline-block;
  visibility: hidden;
  color: white;
  line-height: 1;
  vertical-align: top;
}
.t{
  visibility: visible;
  animation: inx;
  animation-duration: 1s;
}
@keyframes inx {
  0% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);

  }
  70% {
    transform: perspective(400px) rotateX(10deg);

  }
  100% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}
</style>
