<template>
  <pop :s='popoption'>
    <span>纯阳</span>
  </pop>
</template>

<script>
import pop from '../pop.vue'
export default{
  name:'mcy',
  components:{pop},
  data:function () {
    return{
      popoption:{
        iconx:2.5,
        icony:2.25,
        localx:4.80,
        localy:6.00,
        range:28.00,
        iconsize:1.50,
        bgname:'cy.jpg',
        bgmain:'cy-m.jpg',
        unit:'rem'
      }
    }
  }
}
</script>

<style>
</style>
