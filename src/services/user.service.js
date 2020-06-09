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
      .then(response => response.data)
      .catch(e => {
        this.errors.push(e);
      });
    },
    signUp(data) {
        return axios
          .post(url + 'userSignUp/', data)
          .then(response => response.data)
          .catch(e => {
            this.errors.push(e);
          });
    },
    forget(credentials){
      return axios
          .post(url + 'reset/', credentials)
          .then(response => response.data)
          .catch(e => {
            this.errors.push(e);
          });
    },
    reset(credentials, token){
      return axios
          .post(url + `reset-password?access_token=${token}`, credentials)
          .then(response => response.data)
          .catch(e => {
            this.errors.push(e);
          });
    },
    logout(){
      return axios
          .post(url + 'logout/')
          .then(response => response.data)
          .catch(e => {
            this.errors.push(e);
          });
    },
}