import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   redirect:'/cover-page'
  // },
  {
    path: '/',
    // path: '/cover-page',
    name: 'Home',
    component:re => require(['../components/Home.vue'],re)
  },
  {
    path: '/hospital',
    name: 'Hospital',
    component:re => require(['../components/HospitalList.vue'],re)
  },
  {
    path: '/hospital-detail',
    name: 'HospitalDetail',
    component:re => require(['../components/HospitalDetail.vue'],re)
  },
  {
    path: '/setMeal-detail',
    name: 'SetMeal',
    component:re => require(['../components/SetMealDetail.vue'],re)
  },
  {
    path: '/createUser',
    name: 'CreateUser',
    component:re => require(['../components/CreateUser.vue'],re)
  },
  {
    path: '/company',
    name: 'Company',
    component:re => require(['../components/Company.vue'],re)
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
