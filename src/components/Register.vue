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
  <v-container fill-height cols="12" sm="6" md="6">
    <v-layout row justify-space-around>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-20">
            <v-toolbar dark color="cyan">
              <v-toolbar-title>Fundoo Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                type="text"
                v-model="input.firstName"
                name="firstName"
                label="First Name"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="text"
                v-model="input.lastName"
                name="lastName"
                label="Last Name"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="text"
                v-model="input.role"
                name="role"
                label="Role"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="email"
                v-model="input.email"
                name="email"
                label="Email Id"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="input.password"
                name="password"
                label="Password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn v-on:click="Register()" round color="primary" dark>Sign up</v-btn>
              <a href="/login">Already Registered?</a>
              <v-stepper :vertical="$vuetify.breakpoint.xsOnly"></v-stepper>
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
  name: "Registration",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    Register: function() {
      axios
        .post(
          `http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp`,
          {
            firstName: this.input.firstName,
            lastName: this.input.lastName,
            role: this.input.role,
            email: this.input.email,
            password: this.input.password,
            service: "service"
          }
        )
        .then(function(response) {
          console.log(response);
          console.log("DONE");
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>