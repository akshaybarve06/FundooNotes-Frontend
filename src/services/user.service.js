/*
* @Description :
*
* @file: User.Service.js
* @overview: User.service.js is file for API Integration
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 01/06/2020- Monday
*
*/
import service from "./service"

const url='http://fundoonotes.incubation.bridgelabz.com/api/user/';
const token = localStorage.getItem("access_token");

export default {
    login(credentials) {
      return service.postData(url, 'login', credentials )
    },
    signUp(data) {
      return service.postData(url, 'userSignUp', data )
    },
    forget(credentials){
      return service.postData(url, 'reset', credentials )
    },
    reset(credentials){
      return service.postData(url, `reset-password?access_token=${token}`, credentials )
    },
    logout(){
      return service.postWithoutDetails(url, `logout?access_token=${token}`)
    },
}