import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Recruitment from '../views/Recruitment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Recruitment',
    name: 'Recruitment',
    component: Recruitment
  },
]

const router = new VueRouter({
  routes
})

export default router
