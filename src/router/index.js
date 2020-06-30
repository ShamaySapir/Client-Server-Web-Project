import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import WelcomePage from '../views/WelcomePage.vue'
import aboutPage from '../views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage

    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {// set path for new team page
      path: '/WelcomePage',
      name: 'WelcomePage',
      component: WelcomePage
    }
  ]
})