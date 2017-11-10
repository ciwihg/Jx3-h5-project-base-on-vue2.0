<template>
  <div>
    <img  class="spinner" v-bind:style="{width:s.iconsize+0.8+s.unit, height:s.iconsize+0.8+s.unit,position:'absolute', zIndex:2,left:x-0.3+s.unit, top:y-0.3+s.unit}" src="../assets/loc.png" @click="onClick"/>
    <div ref="wrap" class="base" v-bind:style="{left:x+s.unit,top:y+s.unit,width:range+s.unit,height:range+s.unit}"  @transitionend="onTransitionEnd">
      <div ref="c1" @click="onCloseBtn" class="content" v-bind:style="{left:0-x+s.unit,top:0-y+s.unit,width:pagewidth}">
        <slot></slot>
      </div>
  </div>
</div>


</template>

<script>
var cancelscroll=function (event) {   // IE/Opera/Chrome
  event.preventDefault();

};
export default{
  name:"pop",
  props:['s'],
  data:function(){
    return{
      x:0,
      y:0,
      range:0,
      popstatus:true,
      htrue:false,
      pagesize:1680,
      pagewidth:'1200px'
    }
  },
  created:function(){
    this.init();
  },
  mounted:function () {
    this.setBackground();
  },
  methods:{
    init:function () {
      this.x=this.s.iconx;
      this.y=this.s.icony;
      this.range=this.s.iconsize;
      (this.s.unit=="rem")&&(this.pagesize=25,this.pagewidth=window.innerWidth+'px')
    },
    setBackground:function () {
      this.$refs.c1.style.background="url('/dist/"+this.s.bgmain+"') center top no-repeat";
      this.$refs.c1.style.backgroundSize="100% auto";
    },
    onCloseBtn:function (e) {

      if(e.target.className=="rebtn")
      {
        this.close();
      }
    },
    onTransitionEnd:function (e) {
      if(e.target.className!=='base'){
        console.log(13);
        return;
      }
      console.log(e.propertyName);
      if(e.propertyName=="width"&&this.popstatus){

      }
      if(e.propertyName=="height"&&(!this.popstatus)){
        //this.$refs.wrap.style.transition="none";
      //this.range=this.pagesize;
      //this.$refs.wrap.style.borderRadius="0";
         if(this.htrue)
         {window.removeEventListener('mousewheel',cancelscroll);}
         this.htrue=true;
      }

    },
    onClick:function(e){
      if (e.target.className=="spinner") {
       this.open();
       (this.s.unit=="px")&&(window.document.body.style.background="url('/dist/"+this.s.bgname+"') center top no-repeat")
      }
    } ,
    open:function(){
      this.htrue=false;
      if (Object.hasOwnProperty.call(window,'onmousewheel')) {
        // 监听滚轮事件
        window.addEventListener('mousewheel',cancelscroll,false);
      } else {
        window.addEventListener('DOMMouseScroll',cancelscroll,false);
    }
      this.$refs.wrap.style.zIndex='99';
        this.x=0-this.s.localx;
        this.y=0-this.s.localy;
        this.range=this.s.range;
        this.popstatus=false;


    },
    close:function () {
      this.$refs.wrap.style.borderRadius="100%";
        this.$refs.wrap.style.zIndex='0';
       this.x=this.s.iconx;
       this.y=this.s.icony;
         (this.s.unit=="px")&&(window.document.body.style.background="url('/dist/ncover.jpg') center top no-repeat");
       this.range=this.s.iconsize;
       this.popstatus=true;
    }
  }
}
</script>

<style scoped>
@keyframes mymove
{
from {transform:rotate(0deg);}
to {transform:rotate(360deg);}
}
.spinner{
  cursor: pointer;
}
.base{
  border-radius: 100%;
  height: 100px; /*图标大小*/
  width: 100px; /*图标大小*/
  transition:all 1000ms;
  overflow: hidden;
  display: inline-block;
  position: absolute;


}
.wrapper-open{
  height: 1600px;/*圆形范围大小*/
  width:1600px;/*圆形范围大小*/
  border-radius: 100%;
 left: -600px;/*展开后位置*/
 top:-600px;/*展开后位置*/

}

.content{
  position: relative;
  left:-300px;
  top:-300px;
transition: left 1000ms,top 1000ms;
width: 1200px;
height: 1080px;
/*background:  url("../assets/wh-m.jpg") center top no-repeat;*/
}

</style>
