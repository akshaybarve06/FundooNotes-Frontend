<!--
* @Description :
*
* @file: AllNotes.vue
* @overview: Showing All Notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 12/06/2020- Sunday
*
-->
<template>
  <nav>
    <div>
      <md-app>
        <md-app-toolbar>
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="flex: 1">FUNDOO NOTES</span>
          <v-text-field
            dense
            v-model="search"
            placeholder="Search.."
            prepend-icon="search"
            hide-details
          ></v-text-field>
          <md-icon style="margin: 20px">shopping_cart</md-icon>
          <md-icon style="margin: 20px">view_agenda</md-icon>
          <md-button style="margin: 14px" @click="logout()">Logout</md-button>
        </md-app-toolbar>

        <md-app-drawer
          fixed
          app
          clicked
          hide-overlay="true"
          class="grey lighten-4"
          :md-active.sync="menuVisible"
          md-persistent="full"
        >
          <md-toolbar class="md-transparent" md-elevation="2">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>close</md-icon>
              </md-button>
            </div>
          </md-toolbar>
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
            <md-list-item-subtitle>Lables</md-list-item-subtitle>
            <md-list-item>
              <md-icon class="material-icons">add</md-icon>
              <span class="md-list-item-text">Create New Lable</span>
            </md-list-item>
            <br />
            <md-divider></md-divider>
            <br />
            <md-list-item>
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
        <md-app-content>
          <md-button @click="getAllNotes()">Show All Notes</md-button>
        </md-app-content>
      </md-app>
    </div>
  </nav>
</template>

<script>
import user from "../services/user.service";
import notes from "../services/notes.service";

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
    getAllNotes() {
      try {
        let notesArray = [];
        const token = localStorage.getItem("access_token");
        const response = notes.getNotes(token);
        this.msg = response.msg;
        notesArray = response.data;
        console.log("...." + notesArray);
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