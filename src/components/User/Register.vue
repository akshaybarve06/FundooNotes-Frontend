<!-- 
* @Description :
*
* @file: Register.vue
* @overview: Register.vue is page for register new user
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <v-app id="inspire">
    <v-content>
      <v-snackbar color="primary" v-model="input.snackbar" timeout="4000">
        <span>{{input.snackbarText}}</span>
        <v-btn flat text @click="goto()" color="white">OK</v-btn>
        </v-snackbar>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="cyan" dark flat>
                <v-toolbar-title>Fundoo Register</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  type="text"
                  v-model="input.firstName"
                  name="firstName"
                  label="First Name"
                  :rules="['Required']"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  type="text"
                  v-model="input.lastName"
                  name="lastName"
                  label="Last Name"
                  :rules="['Required']"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  type="email"
                  v-model="input.email"
                  name="email"
                  label="Email Id"
                  :rules="['Required']"
                  autocomplete="off"
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="input.password"
                  name="password"
                  label="Password"
                  :rules="['Required']"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <a class="ma-2 pa-2 " href="/login">Login</a>
                  <v-spacer></v-spacer>
                  <v-btn class="cyan ma-3 pa-2" dark v-on:click="register()">Sign up</v-btn>
              <v-stepper :vertical="$vuetify.breakpoint.xsOnly"></v-stepper>
            </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import user from "../../services/user.service";
export default {
  name: "Register",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        service: "advance",
        email: "",
        password: "",
        snackbar: false,
        snackbarText: ""
      },
      response: ""
    };
  },
  methods: {
    async register() {
      try {
        const newUser = {
          firstName: this.input.firstName,
          lastName: this.input.lastName,
          service: "advance",
          email: this.input.email,
          password: this.input.password
        };
        await user.signUp(newUser);
        this.input.snackbar = true;
        this.input.snackbarText = "User Registered SuccessFully"
      } catch (error) {
        console.log(error);
      }
    },
    goto(){
      this.$router.push("/login");
    }
  }
};
</script>