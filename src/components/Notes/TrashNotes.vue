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
  <v-app>
    <div class="container">
      <v-main>
        <v-card style="margin: 7px" class="d-inline-flex" v-for="items in allNotes" :key="items.id">
          <v-layout>
            <v-flex xs8 class="pr-3">
              <v-card-title>{{items.title}}</v-card-title>
              <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
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
      </v-main>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
export default {
  name: "TrashNotes",
  data() {
    return {
      menuVisible: false,
      isdisplay: true,
      allNotes: [],
      response: ""
    };
  },
  methods: {
    async deleteNote(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isDeleted: false
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNoteForever(noteDetails, token);
        alert("Note Deleted Forever");
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
      } catch (error) {
        console.log("error" + error);
      }
    },
    async getTrashNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getAllTrashNotes(token);
        this.allNotes = response.data.data;
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
