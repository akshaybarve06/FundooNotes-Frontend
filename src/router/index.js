import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ForgetPassword from '../components/ForgetPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'
import Dashboard from '../components/Dashboard.vue'
import CreateNote from '../components/CreateNote.vue'
import AllNotes from '../components/AllNotes.vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
 
Vue.use(Datetime)
Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/resetpassword/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/createnote',
    name: 'CreateNote',
    component: CreateNote
  },
  {
    path: '/allnotes',
    name: 'AllNotes',
    component: AllNotes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
