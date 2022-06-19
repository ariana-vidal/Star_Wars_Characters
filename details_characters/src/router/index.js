import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '../components/TheHome'
import MoreDetails from '../pages/MoreDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheHome',
    component: TheHome
  },
  
  {
    path: '/more-details/:id',
    name: 'MoreDetails',
    component: MoreDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
