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
      <md-menu md-size="small" md-align-trigger>
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
      <v-btn icon @click="openDialog(note.id)">
        <md-icon>person</md-icon>
      </v-btn>
      <v-btn icon @click="pickFile()">
        <md-icon>color_lens</md-icon>
      </v-btn>
      <input type="file" ref="file" @change="getFileInputValue" />
      <v-btn icon @click="$refs.file.click()">
        <md-icon>image</md-icon>
      </v-btn>
      <v-btn icon @click="archive(note.id)">
        <md-icon>archive</md-icon>
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
    <div>
      <collaborator />
    </div>
  </div>
</template>
<script>
import notes from "../../services/notes.service";
import collaborator from "../Notes/AddCollaborator";
export default {
  name: "Icon",
  components: {
    collaborator
  },
  props: ["note", "card"],
  data() {
    return {
      dialog: "false",
      selectedFile: "",
    };
  },
  methods: {
    getFileInputValue(val) {
      let file = val.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = val => {
       this.sendImage(val.target.result);
      };
    },
    sendImage(image){
        console.log("Inside emit event Method")
        this.$emit('imageUrl',image)
    },
    async openDialog(noteId) {
      console.log("Hello....There..");
      this.$root.$refs.A.openDialogBox(noteId);
    },
    async archive(key) {
      try {
        const noteDetails = {
          noteIdList: [key],
          isArchived: true
        };
        await notes.archiveNote(noteDetails);
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
        await notes.deleteNote(noteDetails);
        alert("Note Deleted Successfully");
        this.$root.$refs.ShowAllNotes.getAllNotes();
      } catch (error) {
        console.log("error" + error);
      }
    }
  }
};
</script>