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
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="cyan"
                dark
                flat
              >
                <v-toolbar-title>Forget Password</v-toolbar-title>
                <v-spacer></v-spacer>
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
                <a class="ma-2 pa-2 " href="/login">Back To Login</a>
                <v-spacer></v-spacer>
                <v-btn class="cyan ma-3 pa-2" dark v-on:click="forgetPassword()">Send Reset Link</v-btn>
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
  name: "ForgetPassword",
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
      8
      try {
        const userDetails = {
          email: this.input.email
        };
        const response = await user.forget(userDetails);
        //this.$router.push('/resetpassword')
        alert("Reset Link Sent On Email Id")
        this.msg = response.msg;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>