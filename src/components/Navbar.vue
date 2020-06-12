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
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title" style="flex: 1">FUNDOO NOTES</span>
        <md-icon>view_agenda</md-icon> 
        <md-button class="md-primary">Create</md-button>
        <md-button  @click="logout()">Logout</md-button>
      </md-app-toolbar>

      <md-app-drawer temporary
        hide-overlay = "true"
        class="grey lighten-4"
        disable-resize-watcher
        :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="2">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>close</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <br>
        <md-list>
          <md-list-item @click="createNote()">
            <md-icon >lightbulb_outline</md-icon>
            <span class="md-list-item-text">Note</span>
          </md-list-item>

          <md-list-item>
            <md-icon class="material-icons">add_alert</md-icon>
            <span class="md-list-item-text">Reminder</span>
          </md-list-item>
          <br />

          <md-divider></md-divider>
          <br />
          <md-list-item-subtitle>Lables</md-list-item-subtitle>
          <md-list-item>
            <md-icon class="material-icons">add</md-icon>
            <span class="md-list-item-text">Create New Lable</span>
          </md-list-item>
          <br />
          <md-divider></md-divider>
          <br>
          <md-list-item>
            <md-icon class="material-icons">archive</md-icon>
            <span class="md-list-item-text">Archive</span>
          </md-list-item>

          <md-list-item>
            <md-icon class="material-icons">delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
    </md-app>
  </div>
</template>

<script>
import user from '../services/user.service'

export default {
  name: "PersistentFull",
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    createNote() {
      this.$router.push("/createnote");
    },
    logout(){
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
.md-app {
  min-height: 500px;
}
.md-drawer {
  width: 270px;
}
</style>