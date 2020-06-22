<!--
* @Description :
*
* @file: CreateNote.vue
* @overview: CreateNote.vue is component for creating new Note
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 07/06/2020- Sunday
*
-->
<template>
  <nav>
    <v-snackbar color="primary" v-model="input.snackbar" timeout="3000">
      <span>{{input.snackbarText}}</span>
      <v-btn flat text @click="goto()" color="white">OK</v-btn>
    </v-snackbar>
    <div>
      <md-app>
        <md-app-toolbar fixed app class="amber">
          <md-button class="md-icon-button" @click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="margin: 10px">FUNDOO NOTES</span>
          <v-spacer></v-spacer>
          <v-text-field style="margin-top: 10px " outlined dense placeholder="Search.."></v-text-field>
          <v-spacer></v-spacer>
          <md-button style="margin-right: 14px">
            <md-icon>shopping_cart</md-icon>
          </md-button>
          <md-button style="margin-right: 14px">
            <md-icon>view_agenda</md-icon>
          </md-button>
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" style="margin-right: 14px">
                  <md-icon class="material-icons">portrait</md-icon>
                </v-btn>
              </template>
              <v-list >
                <v-list-item @click="logout()">Logout</v-list-item>
              </v-list>
            </v-menu>
          </div>
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
          <div style="margin-bottom: 15px">
            <v-card class="md-layout-item1" v-show="isdisplay" @click="openCard()">
              <v-text-field flat placeholder="Take A Note " solo></v-text-field>
            </v-card>
            <v-card class="md-layout-item2" v-show="!isdisplay">
              <v-text-field flat solo rows="1" v-model="input.title" row-height="10" label="Title"></v-text-field>
              <v-textarea
                flat
                solo
                rows="1"
                v-model="input.description"
                row-height="10"
                label="Take A Note"
                auto-grow
              ></v-textarea>
              <v-card-actions>
                <v-btn text>
                  <md-icon class="material-icons">notifications_active</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">person_add</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">palette</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">panorama</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">archive</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">more_vert</md-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click="closeCard()">close</v-btn>
              </v-card-actions>
            </v-card>
          </div>

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
                    <v-spacer></v-spacer>
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
                    <v-btn icon @click="archive(items.id)">
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
                    <v-dialog v-model="dialog" width="600">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <md-icon class="material-icons">edit</md-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="headline grey lighten-2" primary-title>Update Note</v-card-title>
                        <v-text-field flat solo label="Title"></v-text-field>
                        <v-textarea
                          flat
                          solo
                          rows="1"
                          v-bind:title="items.title"
                          placeholder="${title}"
                          auto-grow
                        ></v-textarea>
                        <v-card-actions>
                          <v-btn @click="reminder()" text>
                            <md-icon class="material-icons">notifications_active</md-icon>
                          </v-btn>
                          <v-btn text>
                            <md-icon class="material-icons">person_add</md-icon>
                          </v-btn>
                          <v-btn text>
                            <md-icon class="material-icons">palette</md-icon>
                          </v-btn>
                          <v-btn text>
                            <md-icon class="material-icons">panorama</md-icon>
                          </v-btn>
                          <v-btn text>
                            <md-icon class="material-icons">archive</md-icon>
                          </v-btn>
                          <v-btn text>
                            <md-icon class="material-icons">more_vert</md-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn text @click="updateCard()">close</v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
        reminder: "",
        snackbar: false,
        snackbarText: ""
      },
      response: ""
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    goToTrash() {
      this.$router.push("/trashnotes");
    },
    createNote() {
      this.$router.push("/createnote");
    },
    openCard() {
      this.isdisplay = false;
    },
    async closeCard() {
      if (this.input.title == "" || this.input.description == "")
        this.isdisplay = true;
      else {
        try {
          const noteDetails = {
            title: this.input.title,
            description: this.input.description
          };
          const token = await localStorage.getItem("access_token");
          const response=notes.addNote(noteDetails, token);
          alert("..."+response)
          this.$router.go()
        } catch (error) {
          console.log(error);
        }
      }
    },

    async logout() {
      try {
        const token = localStorage.getItem("access_token");
        await user.logout(token);
        this.input.snackbar = true;
        this.input.snackbarText = "User Logged Out SuccessFully ";
      } catch (error) {
        console.log(error);
      }
    },
    async archive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: true
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        alert("Note Archived Successfully");
      } catch (error) {
        console.log(error);
      }
    },
    async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getNotes(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    },
    async goToArchiveNotes() {
      this.$router.push("/archivenotes");
    },
    async deleteNote(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isDeleted: true
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNote(noteDetails, token);
        alert("Note Deleted Successfully");
        this.$router.go()
      } catch (error) {
        console.log("error" + error);
      }
    },
    goto() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.getAllNotes();
  }
};
</script>
<style lang="scss" scoped>
@import "../../Style/Style.scss";
</style>