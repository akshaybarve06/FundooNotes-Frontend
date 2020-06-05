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
                <v-toolbar-title>Enter New Password</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
              <v-text-field
                type="password"
                v-model="input.password"
                name="password"
                label="Enter Password"
                :rules="['Required']"
                autocomplete="off"
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="input.confirmPaswword"
                name="confirmPassword"
                label="Confirm Password"
                :rules="['Required']"
                autocomplete="off"
              ></v-text-field>
              <div v-if=" input.password != input.confirmPassword " class="text-danger">Ensure That Both Passwords are same</div>
            </v-card-text>
              <v-card-actions>
              <v-btn round color="cyan" dark v-on:click="resetPassword()">Reset</v-btn>
              <v-spacer></v-spacer>
              <a href="/login">Back To Login</a>
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
        password: "",
        confirmPassword:""
      },
      response: ""
    };
  },
  methods: {
    async resetPassword() {
      try {
        const userDetails = {
          password: this.input.password
        };
        const response = await user.reset(userDetails);
        alert("Password Reset Successfully")
        this.$router.push('/login') 
        this.msg = response.msg;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>