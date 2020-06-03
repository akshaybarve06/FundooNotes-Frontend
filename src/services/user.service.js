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
    getSecretContent() {
        return axios.get(url + 'secret-route/').then(response => response.data);
      }
}