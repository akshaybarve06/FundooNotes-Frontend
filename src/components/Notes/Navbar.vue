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
  <v-app>
    <v-app-bar app clipped-left color="amber">
      <md-button class="md-icon-button" @click="drawer = !drawer">
        <md-icon>menu</md-icon>
      </md-button>
      <v-toolbar-title>
        <span>FundooNotes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        class="mx-4"
        flat
        filled
        dense
        hide-details
        placeholder="Search"
        autocomplete="off"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>view_agenda</v-icon>
      </v-btn>
      <div class="text-center">
        <v-menu v-model="menu">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>portrait</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ userEmail }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="menu = false">Cancel</v-btn>
              <v-btn text @click="logout()">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped expand-on-hover floating>
      <v-list dense>
        <template v-for="(link, i) in links">
          <v-row v-if="link.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="link.heading">{{ link.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="link.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <div class="container">
          <router-view></router-view>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import user from "../../services/user.service";
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  data() {
    return {
      userEmail: localStorage.getItem("email"),
      menu: false,
      drawer: true,
      link: 0,
      links: [
        { text: "Notes", icon: "lightbulb_outline", route: "createnote" },
        { text: "Reminder", icon: "add_alert" },
        { divider: true },
        { text: "Create New Lable", icon: "add" },
        { divider: true },
        { text: "Archive", icon: "archive", route: "archivenotes" },
        { text: "Trash", icon: "delete", route: "trashnotes" },
        { text: "Help", icon: "help_outline", route: "help" }
      ]
    };
  },
  methods: {
    logout() {
      try {
        const token = localStorage.getItem("access_token");
        const response = user.logout(token);
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
<style lang="scss" scoped>
@import "../../css/Navbar.scss";
</style>