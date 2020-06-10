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
  <div id="newnote">
    <Navbar />

    <v-layout justify-center row fill-height pt-4>
      <v-flex lg5 xs12 mb7 sm8>
        <v-form>
        <v-text-field
          class="ma-2 pa-2"
          placeholder="Take A Note"
          v-model="input.title"
          solo
          name="title"
        >
          <template slot="append">
            <v-icon flat @click="popup()" class="ma-2">mdi-view-list</v-icon>
            <v-icon class="ma-2">mdi-image</v-icon>
          </template>
        </v-text-field>
          <div id="showNote" style="display:none;">
            <v-card-title>
              <v-textarea
                solo
                v-model="input.description"
                name="description"
                placeholder="Description"
              ></v-textarea>
              <v-card-actions>
                <v-icon class="ma-2 pa-2">mdi-history</v-icon>
                <v-icon class="ma-2 pa-2">mdi-account-plus</v-icon>
                <v-icon class="ma-2 pa-2">mdi-format-color-fill</v-icon>
                <v-icon class="ma-2 pa-2">mdi-file-image</v-icon>
                <v-icon class="ma-2 pa-2">mdi-package-down</v-icon>
                <v-icon class="ma-2 pa-2">mdi-dots-vertical</v-icon>
                <v-btn class="cyan ma-2 flex-item-bottom" dark v-on:click="newNote()">Add Note</v-btn>
              </v-card-actions>
            </v-card-title>
          </div>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import notes from "../services/notes.service";
export default {
  components: { Navbar },
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      input: {
        title: "",
        description: ""
      },
      response: ""
    };
  },
  methods: {
    async newNote() {
      try {
        const noteDetails = {
          title: this.input.title,
          description: this.input.description
        };
        const token = localStorage.getItem("access_token");
        await notes.addNote(noteDetails, token);
      } catch (error) {
        console.log(error);
      }
    },
    popup(){
      var x = document.getElementById("showNote");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else if (x.style.display === "none") {
        x.style.display = "block";
      }
}
  }
};
</script>