<!-- 
* @Description :
*
* @file: Home.vue
* @overview: Home.vue is home page of vue app
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <div >
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="2"  md="2">
              <v-card class="elevation-12 tile"  >
                <v-spacer></v-spacer>
                <v-btn class="cyan ma-7 pa-7 " align dark v-on:click="proceed()">Continue</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  methods: {
    proceed() {
        this.$router.push("/register");
      }
    }
}
</script>