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
                type="text"
                v-model="input.role"
                name="role"
                label="Role"
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
              <v-btn v-on:click="register()" round color="primary" dark>Sign up</v-btn>
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
import user from "../services/user.service";
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
    async register() {
      try {
        const newUser = {
            firstName: this.input.firstName,
            lastName: this.input.lastName,
            role: this.input.role,
            service: "service",
            email: this.input.email,
            password: this.input.password
        };
        const response = await user.signUp(newUser);
        this.msg = response.msg;
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>