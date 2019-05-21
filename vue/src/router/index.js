import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      children:[
        {
          path: '/page1',
          name: 'HelloWorld',
          component: HelloWorld
        },
      ]
    }
  ]
})
