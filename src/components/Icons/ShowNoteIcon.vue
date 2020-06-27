<!--
* @Description :
*
* @file: Icon.vue
* @overview: Icon.vue is component for all icons in project
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 23/06/2020- Tuesday
*
-->
<template>
  <div>
    <div style="width:170px; display: flex; justify-content:space-between; margin-left:4px;">
      <md-menu md-size="small" md-align-trigger >
        <v-btn icon>
          <md-icon md-menu-trigger md-size="small">add_alert</md-icon>
        </v-btn>
        <md-menu-content>
           <md-menu-item>Later Today - 08.00 PM</md-menu-item>
          <md-menu-item>Tomorrow - 08.00 AM</md-menu-item>
          <md-menu-item>Next Week - MON 08.00 AM</md-menu-item>
           <md-datepicker>
            <label>Select Custom Date</label>
          </md-datepicker>
        </md-menu-content>
      </md-menu>
      <v-btn icon>
        <md-icon >person</md-icon>
      </v-btn>
      <v-btn icon>
        <md-icon >color_lens</md-icon>
      </v-btn>
      <input id="fileUpload" type="file" hidden />
      <v-btn icon @click="chooseFiles()">
        <md-icon >image</md-icon>
      </v-btn>
      <v-btn icon @click="archive(note.id)" >
        <md-icon >archive</md-icon>
      </v-btn>
      <md-menu md-size="small" md-align-trigger v-if="card==true">
        <v-btn icon>
          <md-icon md-menu-trigger md-size="small">more_vert</md-icon>
        </v-btn>
        <md-menu-content>
          <md-menu-item>Add Lable</md-menu-item>
          <md-menu-item>Add Drawing</md-menu-item>
          <md-menu-item>Make A Copy</md-menu-item>
        </md-menu-content>
      </md-menu>
      <md-menu md-size="small" md-align-trigger v-if="card==false">
        <v-btn icon>
          <md-icon md-menu-trigger md-size="small">more_vert</md-icon>
        </v-btn>
        <md-menu-content>
          <md-menu-item @click="deleteNote(note.id)">Delete Note</md-menu-item>
          <md-menu-item>Add Lable</md-menu-item>
          <md-menu-item>Add Drawing</md-menu-item>
          <md-menu-item>Make A Copy</md-menu-item>
          <md-menu-item>Show Tick Boxes</md-menu-item>
          <md-menu-item>Copy To Google Docs</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>
<script>
import notes from "../../services/notes.service";
export default {
  name: "Icon",
  props: ["note", "card"],
  methods: {
    chooseFiles: function() {
      const file=document.getElementById("fileUpload").click();
      console.log("Input file.."+file);
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
        this.$root.$refs.ShowAllNotes.getAllNotes();
      } catch (error) {
        console.log(error);
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
        this.$root.$refs.ShowAllNotes.getAllNotes();
      } catch (error) {
        console.log("error" + error);
      }
    }
  }
};
</script>