import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login/Login.vue'
import Home from 'views/Home/Home.vue';
import First from 'views/Home/Pages/First/First.vue';
import Example from 'views/Home/Pages/Example/Example.vue';
import Community from 'views/Home/Pages/Community/Community.vue';
import Person from 'views/Home/Pages/Person/Person.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {path:'/',redirect:'/first'},
        {path:'/first',component:First},
        {path:'/example',component:Example},
        {path:'/community',component:Community},
        {path:'/person',component:Person}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
