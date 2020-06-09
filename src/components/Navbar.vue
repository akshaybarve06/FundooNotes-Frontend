<!-- 
* @Description :
*
* @file: Navbar.vue
* @overview: Navbar.vue is for navigation in pages
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 04/06/2020- Thursday
*
-->
<template>
  <nav>
    <v-toolbar height="70px" class="amber accent-3" flat>
      <v-icon class="gray--text" @click="drawer= !drawer">mdi-reorder-horizontal</v-icon>
      <span class="ma-5 pa-4 font-weight-light">FUNDOO NOTES</span>
      <span></span>
      <v-text-field
        dense
        class="ma-5 pa-7"
        v-model="search"
        placeholder="Search.."
        prepend-icon="mdi-magnify"
        hide-details
      ></v-text-field>
      <v-icon class="ma-3 pa-4">mdi-cart</v-icon>
      <v-icon class="ma-3 pa-4">mdi-view-agenda</v-icon>
      <v-icon @click="logout()" class="ma-3 pa-4">mdi-logout</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer">
      <!-- <v-list-item>
        <v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>-->

      <v-list dense nav>
        <v-list-item v-on:click="createNote()">
          <v-icon>mdi-lightbulb</v-icon>
          <v-list-item-title class="mdi-24px ma-4">Note</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-icon>mdi-calendar-clock</v-icon>
          <v-list-item-title class="mdi-24px ma-4">Reminder</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item-subtitle>Lables</v-list-item-subtitle>
        <v-list-item>
          <v-icon>mdi-plus</v-icon>
          <v-list-item-title class="mdi-24px ma-5">Create New Lable</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item link>
          <v-icon>mdi-clipboard-arrow-down</v-icon>
          <v-list-item-title class="mdi-24px ma-4">Archives</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-icon>mdi-delete</v-icon>
          <v-list-item-title class="mdi-24px ma-4">Trash</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item link>
          <v-icon>mdi-help-box</v-icon>
          <v-list-item-title class="mdi-24px ma-4">Help</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import user from '../services/user.service'
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    createNote() {
      this.$router.push("/createnote");
    },
    logout(){
      try {
        const response = user.logout();
        this.snackbar = true;
        this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>