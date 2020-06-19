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
      <v-snackbar color="primary" v-model="input.snackbar" timeout="4000">
        <span>{{input.snackbarText}}</span>
        <v-btn flat text @click="goto()" color="white">OK</v-btn>
        </v-snackbar>
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
import user from "../../services/user.service";
export default {
  name: "ForgetPassword",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        email: "",
        snackbar: false,
        snackbarText: ""
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
        await user.forget(userDetails);
        this.input.snackbar = true;
        this.input.snackbarText = "Reset Link Sent On Registerd Email "
      } catch (error) {
        console.log(error);
      }
    },
    goto(){
      this.$router.push("/forgetpassword");
    }
  }
};
</script>