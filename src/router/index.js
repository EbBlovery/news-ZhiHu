import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: require('../components/Index'),
        children:[
           {
           	  path:'main',
           	  component: require('../views/index')
           },{
           	  path:'list',
           	  component: require('../views/newsLists')
           },{
           	  path:'infor',
           	  component: require('../views/Informate')
           }
        ]
    },{
    	  path: '*',
    	  redirect:'/main'
    },{
        path:'/newsThub',
        component: require('../views/newsThub')
    },{
        path:'/handlein',
        component: require('../views/handleIn')
    }
  ]
})
