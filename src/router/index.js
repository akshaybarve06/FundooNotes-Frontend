import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/User/Login.vue'
import Register from '../components/User/Register.vue'
import ForgetPassword from '../components/User/ForgetPassword.vue'
import ResetPassword from '../components/User/ResetPassword.vue'
import Navbar from '../components/Notes/Navbar.vue'
import CreateNote from '../components/Notes/CreateNote.vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import ArchiveNotes from '../components/Notes/ArchiveNotes.vue'
import TrashNotes from '../components/Notes/TrashNotes.vue'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Navbar',
    component: Navbar,
    children:[
      {
        path: '/createnote',
        name: 'CreateNote',
        component: CreateNote
      },
      {
        path: '/archivenotes',
        name: 'ArchiveNotes',
        component: ArchiveNotes
      },
      {
        path: '/trashnotes',
        name: 'TrashNotes',
        component: TrashNotes
      },
    ]
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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
