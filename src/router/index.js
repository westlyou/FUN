import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: welcome
    },
    {
      path: '/posts/',
      name: 'posts',
      component: Posts
    }
  ]
})
