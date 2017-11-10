import Vue from 'vue'
import Router from 'vue-router'
import mobile from '../components/mobile.vue'
import pc from '../components/pc.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path:"/",
      name:"pc",
      component:pc
    },
    {
      path:"/mobile",
      name:"mobile",
      component:mobile
    }
  ]
})
