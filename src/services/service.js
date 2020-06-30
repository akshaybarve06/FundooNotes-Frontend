/*
* @Description :
*
* @file: service.js
* @overview: service.js is main file for API Integration
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 29/06/2020- Monday
*
*/

import axios from "axios";

export default {
  postData(mainUrl, subUrl, details) {
    return axios
      .post(mainUrl + subUrl, details)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  postWithoutDetails(mainUrl,subUrl){
    return axios
      .post(mainUrl + subUrl)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  getNotes(mainUrl, subUrl) {
    return axios
      .get(mainUrl + subUrl)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
}
