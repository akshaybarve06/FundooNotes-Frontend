/* 
* @Description :
*
* @file: Login.html
* @overview: Login.html is page for register new user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
*/
// REQUIRED IMPORTS
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

// ROUTES TO NAVIGATE IN PAGES 
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home       // ROUTE FOR HOME PAGE
  },
  {
    path: "/login",
    name: "Login",
    component: Login      // ROUTE FOR LOGIN PAGE
  },
  {
    path: "/register",
    name: "Register",
    component: Register   //ROUTE FOR REGISTRATION PAGE
  },
  {
    path: "/about",
    name: "About",
    // ROUTE LEVEL CODE-SPLITTING
    // GENERATES SEPARATE CHUNK FOR THIS ROUTE
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode:"history",     // MODE TO VIEW PROPER URL
  routes
});

export default router;
