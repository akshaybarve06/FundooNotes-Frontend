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
import axios from "axios";

const url='http://fundoonotes.incubation.bridgelabz.com/api/user/';

export default {
    login(credentials) {
      return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
    },
    signUp(credentials) {
        return axios
          .post(url + 'userSignUp/', credentials)
          .then(response => response.data);
    },
    forget(credentials){
      return axios
          .post(url + 'reset/', credentials)
          .then(response => response.data);
    },
    reset(credentials){
      return axios
          .post(url + 'reset-password/:access_token', credentials)
          .then(response => response.data);
    }
}