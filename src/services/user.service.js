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
          .post(url + 'reset-password/access_token=${token}', credentials)
          .then(response => response.data);
    }
}