<!--
* @Description :
*
* @file: ArchiveNotes.vue
* @overview: ArchiveNotes.vue is component for showing all archive notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 16/06/2020- Tuesday
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
            <md-list-item @click="getArchiveNotes()">
              <md-icon class="material-icons">archive</md-icon>
              <span class="md-list-item-text">Archive</span>
            </md-list-item>

            <md-list-item @click="goToTrashNotes()">
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
                    <div class="text-center">
                      <v-menu offset-x>
                        <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                            <md-icon class="material-icons">notifications_active</md-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <md-field>
                            <label margin="10%">Reminder</label>
                            <md-select v-model="input.reminder">
                              <md-datepicker>
                                <label>Select Custom Date</label>
                              </md-datepicker>
                              <md-option value="xx/xx/xxxx">Later Today - 08.00 PM</md-option>
                              <md-option value="xx/xx/xxxx">Tomorrow - 08.00 AM</md-option>
                              <md-option value="xx/xx/xxxx">Next Week - MON 08.00 AM</md-option>
                            </md-select>
                          </md-field>
                        </v-list>
                      </v-menu>
                    </div>
                    <v-btn icon>
                      <md-icon class="material-icons">person_add</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">palette</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">panorama</md-icon>
                    </v-btn>
                    <v-btn icon @click="unArchive(items.id)">
                      <md-icon class="material-icons">archive</md-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <div class="text-center">
                      <v-menu offset-x>
                        <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                            <md-icon class="material-icons">more_vert</md-icon>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item @click="deleteNote(items.id)">Delete / Trash Note</v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
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
  name:"CreateNote",
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
    createNote() {
      this.$router.push("/createnote");
    },
     goToTrashNotes() {
      this.$router.push("/trashnotes");
    },
    logout() {
      try {
        const token = localStorage.getItem("access_token");
        const response = user.logout(token);
        alert("Logout Successful...");
        this.snackbar = true;
        this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async unArchive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: false
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        alert("Note Unarchived Successfully");
      } catch (error) {
        console.log(error);
      }
    },
    async getArchiveNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getArchiveNotesList(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    },
    async deleteNote(key){
      try {
        const noteDetails={
          noteIdList:[key],
          isDeleted:false
        }
        const token = localStorage.getItem("access_token");
        const response = await notes.deleteNoteForever(noteDetails, token);
        alert("response"+response)
      } catch (error) {
        console.log("error" + error);
      }
    }
  },
  mounted() {
    this.getArchiveNotes();
  }
};
</script>

<style >
@import "../../Style/Style.scss"
</style>