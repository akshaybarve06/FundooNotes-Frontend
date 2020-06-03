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
    resetPassword(credentials){
      return axios
          .post(url + 'reset', credentials)
          .then(response => response.data);
    }
}