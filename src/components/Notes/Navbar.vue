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
    <div>
      <md-app>
        <md-app-toolbar fixed app class="amber">
          <md-button class="md-icon-button" @click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="margin: 14px">FUNDOO NOTES</span>
          <v-spacer></v-spacer>
          <v-text-field width="50" style="margin-top: 14px " dense placeholder="Search.."></v-text-field>
          <v-spacer></v-spacer>
          <md-button style="margin-right: 14px">
            <md-icon>shopping_cart</md-icon>
          </md-button>
          <md-button style="margin-right: 14px">
            <md-icon>view_agenda</md-icon>
          </md-button>
          <md-button style="margin-right: 14px" @click="logout()">
            <md-icon>portrait</md-icon>
          </md-button>
        </md-app-toolbar>

        <md-app-drawer
          :md-active.sync="menuVisible"
          md-permanent="clipped"
          md-persistent="mini"
          md-swipe-threshold="20"
        >
          <br />
          <md-list>
            <md-list-item @click="createNote()">
              <md-icon>lightbulb_outline</md-icon>
              <span class="md-list-item-text">Note</span>
            </md-list-item>

            <md-list-item>
              <md-icon class="material-icons">add_alert</md-icon>
              <span class="md-list-item-text">Reminder</span>
            </md-list-item>
            <br />

            <md-divider></md-divider>
            <br />
            <md-list-item>
              <md-icon class="material-icons">add</md-icon>
              <span class="md-list-item-text">Create New Lable</span>
            </md-list-item>
            <br />
            <md-divider></md-divider>
            <br />
            <md-list-item @click="archiveNotes()">
              <md-icon class="material-icons">archive</md-icon>
              <span class="md-list-item-text">Archive</span>
            </md-list-item>

            <md-list-item>
              <md-icon class="material-icons">delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>
            <md-list-item>
              <md-icon class="material-icons">help_outline</md-icon>
              <span class="md-list-item-text">Help</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
       <router-view></router-view>
      </md-app>
    </div>
  </nav>
</template>

<script>
import user from "../../services/user.service";

export default {
  name:"Navbar",
  data() {
    return {
      menuVisible: false,
      input: {
        file: "",
        title: "",
        description: "",
        checklist: "",
        isPinned: "",
        isArchived: "",
        color: "",
        reminder: ""
      },
      response: ""
    };
  },

  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    createNote() {
      this.$router.push("/createnote");
    },
    archiveNotes(){
      this.$router.push("/archivenotes");
    },
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
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../Style/Style.scss"
</style>

