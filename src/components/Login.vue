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
    <v-card class="elevation-12" >
        <v-row justify="center" align="center">
          <v-col sm="6" md="5">
              <v-toolbar color="cyan" >
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
                <v-text-field
                  type="password"
                  v-model="input.password"
                  name="password"
                  label="Enter Password"
                  :rules="['Required']"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="cyan" dark v-on:click="userData()">Login</v-btn>
                <a href="/forgetpassword">Forgot Password?</a>
              </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
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
        email: "",
        password: ""
      },
      response: ""
    };
  },
  methods: {
    async userData() {
      try {
        const userDetails = {
          email: this.input.email,
          password: this.input.password
        };
        const response = await user.login(userDetails);
        localStorage.setItem("access_token", response.id);
        alert("Login Successful..");
        this.msg = response.msg;
        this.$router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>