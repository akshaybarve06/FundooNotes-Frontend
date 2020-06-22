<!--
* @Description :
*
* @file: TrashNotes.vue
* @overview: TrashNotes.vue is component for showing all trash Note
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 20/06/2020- Saturday
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
          <v-text-field style="margin-top: 14px " outlined dense placeholder="Search.."></v-text-field>
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
        <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped" md-persistent="mini">
          <br />
          <md-list>
            <md-list-item @click="goToCreateNote()">
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
            <md-list-item @click="goToArchiveNotes()">
              <md-icon class="material-icons">archive</md-icon>
              <span class="md-list-item-text">Archive</span>
            </md-list-item>

            <md-list-item @click="goToTrash()">
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
        <v-content>
          <v-card
            style="margin: 7px"
            class="d-inline-flex"
            v-for="items in allNotes"
            :key="items.id"
          >
            <v-layout>
              <v-flex xs8 class="pr-3">
                <v-card-title>{{items.title}}</v-card-title>
                <v-card-text>{{items.description}}</v-card-text>
                <v-card-actions>
                  <v-btn text @click="restoreNote(items.id)">
                    <md-icon class="material-icons">restore</md-icon>
                  </v-btn>
                  <v-btn text @click="deleteNote(items.id)">
                    <md-icon class="material-icons">delete_sweep</md-icon>
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-content>
        </md-app-content>
      </md-app>
    </div>
  </nav>
</template>
<script>
import user from "../../services/user.service";
import notes from "../../services/notes.service";
export default {
  name: "CreateNote",
  data() {
    return {
      menuVisible: false,
      isdisplay: true,
      allNotes: [],
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
    goToCreateNote() {
      this.$router.push("/createnote");
    },
    async logout() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await user.logout(token);
        alert("Logout Successful...");
        this.snackbar = true;
        this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async goToArchiveNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getArchiveNotesList(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    },
    async deleteNote(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isDeleted: false
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNoteForever(noteDetails, token);
        alert("Note Deleted Forever");
        window.location.reload()
      } catch (error) {
        console.log("error" + error);
      }
    },
    async restoreNote(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isDeleted: false
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNote(noteDetails, token);
        alert("Note Restored Successfully");
        this.$router.go()
        
      } catch (error) {
        console.log("error" + error);
      }
    },
    async getTrashNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getAllTrashNotes(token);
        this.allNotes = response.data.data;
        console.log("All Notes...." + this.allNotes);
      } catch (error) {
        console.log("error" + error);
      }
    }
  },
  mounted() {
    this.getTrashNotes();
  }
};
</script>

<style >
@import "../../Style/Style.scss";
</style>