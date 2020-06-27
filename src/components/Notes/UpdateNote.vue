<!--
* @Description :
*
* @file: UpdateNote.vue
* @overview: UpdateNote.vue is component for update created notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 26/06/2020- Friday
*
-->
<template>
  <v-card class="margin:50x">
    <v-card-title class="headline grey lighten-2" primary-title>Update Note</v-card-title>
    <v-text-field flat solo rows="1" v-model="noteDetails.title"></v-text-field>
    <v-textarea flat solo rows="1" v-model="noteDetails.description" auto-grow></v-textarea>
    <v-card-actions>
      <Icon />
      <v-spacer></v-spacer>
      <v-btn padding="20px" text @click="updateNoteDetails()">close</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import Icon from "../Icons/ShowNoteIcon";
import notes from "../../services/notes.service";
export default {
  props: ["noteDetails"],
  data() {
    return {};
  },
  components: {
    Icon
  },
  methods: {
    async updateNoteDetails() {
      try {
        const noteDetails = {
          noteId: this.noteDetails.id,
          title: this.noteDetails.title,
          description: this.noteDetails.description
        };
        const token = await localStorage.getItem("access_token");
        notes.updateNote(noteDetails, token);
        alert("Note Updated Successfully");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>