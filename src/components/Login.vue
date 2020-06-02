<!-- 
* @Description :
*
* @file: Login.vue
* @overview: Login.vue is page for register new user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm4 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Fundoo Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                type="email"
                v-model="input.email"
                name="email"
                label="Enter Email"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="input.password"
                name="password"
                label="Enter Password"
                autocomplete="off"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn round color="primary" dark v-on:click="Login()">Login</v-btn>
              <v-spacer></v-spacer>
              <a href="ForgetPassword.vue">Forgot Password?</a>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    Login: function() {
      axios
        .post(`http://fundoonotes.incubation.bridgelabz.com/api/user/login`, {
          email: this.input.email,
          password: this.input.password
        })
        .then(function(response) {
          alert("Login Successfull");
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>