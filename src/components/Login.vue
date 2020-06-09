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
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
                <v-toolbar color="cyan" dark flat>
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
                    <a class="ma-2 pa-2 " href="/forgetpassword">Forgot Password ?</a>
                    <v-spacer></v-spacer>
                    <v-btn class="cyan ma-3 pa-2" dark v-on:click="userData()">Login</v-btn>
                  </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
<style lang="stylus" scoped>

</style>