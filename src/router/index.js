import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/User/Login.vue'
import Register from '../components/User/Register.vue'
import ForgetPassword from '../components/User/ForgetPassword.vue'
import ResetPassword from '../components/User/ResetPassword.vue'
import Navbar from '../components/Notes/Navbar.vue'
//import CreateNote from '../components/Notes/CreateNote.vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import Archive from '../components/Notes/ArchiveNotes.vue'
import TrashNotes from '../components/Notes/TrashNotes.vue'
import Note from '../components/Notes/Note.vue'

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
    name: 'Navbar',
    component: Navbar,
    children:[
      {
        path: '/note',
        name: 'Note',
        component: Note
      },
      {
        path: '/archive',
        name: 'Archive',
        component: Archive
      },
      {
        path: '/trash',
        name: 'Trash',
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
