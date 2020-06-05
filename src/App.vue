<!-- 
* @Description :
*
* @file: App.vue
* @overview: App.vue is main page of VUE app
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->

<template>
  <v-card
    color="yellow lighten-4"
    flat
    height="350px"
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Fundoo Notes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-col cols="12" sm="">
        <v-select
          :items="item1"
          label="Solo field"
          dense
          solo
        ></v-select>
      </v-col>
    </v-toolbar>
  <router-view />
  </v-card>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>