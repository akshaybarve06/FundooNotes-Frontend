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
  <v-app>
    <div class="container">
      <v-main>
        <div style="margin-bottom: 15px">
          <v-card class="md-layout-item1" v-show="isdisplay" @click="openCard()">
            <v-text-field flat placeholder="Take A Note " solo></v-text-field>
          </v-card>
          <v-card class="md-layout-item2" v-show="!isdisplay">
            <v-text-field flat solo rows="1" v-model="input.title"  label="Title"></v-text-field>
            <v-textarea
              flat
              solo
              rows="1"
              v-model="input.description"
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
      </v-main>
    </div>
  </v-app>
</template>
<script>
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
          const response = notes.addNote(noteDetails, token);
          alert("..." + response.msg);
          this.$router.go();
        } catch (error) {
          console.log(error);
        }
      }
    },
    },
};
</script>
<style lang="scss" scoped>
@import "../../css/CreateNote.scss";
</style>