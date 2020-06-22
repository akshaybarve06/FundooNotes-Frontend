<!-- 
* @Description :
*
* @file: ResetPassword.vue
* @overview: ResetPassword.vue is page for reset password of user
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
                v-model="input.newPassword"
                name="newPassword"
                label="New Password"
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
            </v-card-text>
              <v-card-actions>
                  <a class="ma-2 pa-2 " href="/login">Back To Login</a>
                  <v-spacer></v-spacer>
                  <v-btn round class="cyan ma-3 pa-2" dark v-on:click="resetPassword()">Reset</v-btn>
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
  name: "ResetPassword",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        newPassword: "",
        confirmPassword:"",
        snackbar: false,
        snackbarText: ""
      },
      response: ""
    };
  },
  methods: {
    async resetPassword() {
      try {
        const userDetails = {
          newPassword: this.input.newPassword
        };
        const token=this.$route.params.token
        await user.reset(userDetails,token);
        this.input.snackbar = true;
        this.input.snackbarText = "Password Reset Successfully "
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