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
  <v-app>
    <div class="container">
      <v-main>
            <v-card
              style="margin: 7px"
              class="d-inline-flex"
              v-for="items in allNotes"
              :key="items.id"
            >
              <v-layout>
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
    async unArchive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: false
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        alert("Note Unarchived Successfully");
        this.$router.go()
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
        await notes.deleteNote(noteDetails, token);
        alert("Note Deleted Successfully")
        this.$router.go()
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
