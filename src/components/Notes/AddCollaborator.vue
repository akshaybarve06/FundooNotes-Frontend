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
  <div>
    <v-dialog width="500px" v-model="dialog">
      <v-card>
        <v-card-title class="lighten-2" primary-title>Collaborators</v-card-title>
        <v-divider></v-divider>
        <h3 style="margin:10px">{{userEmail}}</h3>
        <v-text-field flat solo rows="1" v-model="email" placeholder="Enter Collaborator Email"></v-text-field>
         <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn right text @click="closeDialogBox()">Cancel</v-btn>
          <v-btn right text @click="addCollaborator()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import notes from "../../services/notes.service";                                                                       
export default {
  name: "AddCollaborator",
  data() {
    return {
      userEmail:localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      userId: localStorage.getItem("userId"),
      dialog: "",
      noteId: "",
      email:""
    };
  },
  methods: {
    async openDialogBox(noteId) {
      this.dialog = true;
      this.noteId = noteId;
    },
    async closeDialogBox() {
      this.dialog = false;
    },
    async addCollaborator() {
        try {
         const userDetails = {
           email:this.email,
           firstName: this.firstName,
           lastName:this.lastName,
           userId:this.userId
         };
         notes.addCollaboratorNotes(this.noteId, userDetails);
         alert("Note Updated Successfully");
         this.dialog = false;
       } catch (error) {
         console.log(error);
       }
      console.log("Inside Add Collaborator...")
  }
  },
  created() {
    this.$root.$refs.A = this;
  },
};
</script>


 