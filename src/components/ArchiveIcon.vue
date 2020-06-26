<!--
* @Description :
*
* @file: ArchiveIcon.vue
* @overview: ArchiveIcon.vue is component for all archive icons in project
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 24/06/2020- Wednesday
*
-->
<template>
  <div>
    <div style="width:170px; display: flex; justify-content:space-between; margin-left:4px;" >
      <v-btn icon>
        <img src="../assets/add_alert.svg" />
      </v-btn>
      <v-btn icon>
        <img src="../assets/person.svg" />
      </v-btn>
      <v-btn icon>
        <img src="../assets/color_lens.svg" />
      </v-btn>
      <v-btn icon>
        <img src="../assets/image.svg" />
      </v-btn>
      <v-btn icon>
        <img src="../assets/unarchive.svg" @click="unArchive(note.id)"  />
      </v-btn>
      <md-menu md-size="small" md-align-trigger >
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
import notes from "../services/notes.service";
export default {
  name: "ArchiveIcon",
  props: ["note"],
  methods: {
    async unArchive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: false
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        this.$root.$refs.ShowAllArchiveNotes.getArchiveNotes();
        alert("Note Unarchived Successfully");
      } catch (error) {
        console.log(error);
      }
    },
    async deleteNote(key) {
      try {
          console.log("Key..."+key)
        const noteDetails = {
          noteIdList: [key],
          isDeleted: true
        };
        const token = localStorage.getItem("access_token");
        await notes.deleteNote(noteDetails, token);
        alert("Note Deleted Successfully");
        this.$root.$refs.ShowAllArchiveNotes.getArchiveNotes();
      } catch (error) {
        console.log("error" + error);
      }
    },
  }
};
</script>