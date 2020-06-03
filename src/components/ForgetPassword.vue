<!-- 
* @Description :
*
* @file: ForgetPassword.vue
* @overview: ForgetPassword.vue is page for reset password of user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 31/05/2020- Wednesday
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
                :rules="['Required']"
                autocomplete="off"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn round color="primary" dark v-on:click="forgetPassword()">Login</v-btn>
              <v-spacer></v-spacer>
              <a href="/login">Back To Login</a>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import user from "../services/user.service";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        email: ""
      },
      response: ""
    };
  },
  methods: {
    async forgetPassword() {
      try {
        const userDetails = {
          email: this.input.email
        };
        const response = await user.resetPassword(userDetails);
        this.msg = response.msg;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>