<!--
* @Description :
*
* @file: ShowAllNotes.vue
* @overview: ShowAllNotes.vue is component for show created notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 22/06/2020- Monday
*
-->
<template>
  <v-app>
    <div class="container">
      <v-main>
            <v-content>
          <v-card
            style="margin: 7px"
            class="d-inline-flex"
            v-for="items in allNotes"
            :key="items.id"
          >
            <v-layout v-if="items.isDeleted==false && items.isArchived==false">
                <v-flex xs12 class="pr-3">
                <v-card-title>{{items.title}}</v-card-title>
                <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
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
                  <v-btn icon @click="archive(items.id)">
                    <md-icon class="material-icons">archive</md-icon>
                  </v-btn>
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
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                  </div>
                  <v-dialog v-model="dialog" width="600" >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <md-icon class="material-icons">edit</md-icon>
                      </v-btn>
                    </template>
                    <v-card >
                      <v-card-title class="headline grey lighten-2" primary-title>Update Note</v-card-title>
                      <v-text-field flat solo label="Title"></v-text-field>
                      <v-textarea
                        flat
                        solo
                        rows="1"
                        v-bind:title="items.title"
                        placeholder='askdj'
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
      </v-main>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
export default {
  name:"ArchiveNotes",
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
     async archive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: true
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        alert("Note Archived Successfully");
        this.$router.go();
      } catch (error) {
        alert(error);
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
    async deleteNote(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isDeleted: true
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNote(noteDetails, token);
        alert("Note Deleted Successfully");
        this.$router.go();
      } catch (error) {
        console.log("error" + error);
      }
    },
  },
  mounted() {
    this.getAllNotes();
  }
};
</script>

<style >
@import "../../css/ShowAllNotes.scss"
</style>