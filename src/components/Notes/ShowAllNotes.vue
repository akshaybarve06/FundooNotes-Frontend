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
          <v-card @click="getId(items)"
            style="margin: 7px"
            class="d-inline-flex"
            v-for="items in allNotes.slice().reverse()"
            :key="items.id"
            
          >
          <v-card v-if="items.isDeleted==false && items.isArchived==false">
            <v-layout >
              <v-flex xs12 class="pr-3">
                <v-card-title>{{items.title}}</v-card-title>
                <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
                <v-card-actions>
                  <Icon style="padding-left:10px" v-bind:note="items" />
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialog" width="600">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on">
                        <md-icon class="material-icons">edit</md-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline grey lighten-2" primary-title>Update Note</v-card-title>
                      <v-text-field flat solo label="Title"></v-text-field>
                      <v-textarea
                        flat
                        solo
                        rows="1"
                        v-bind:title="items.title"
                        placeholder="askdj"
                        auto-grow
                      ></v-textarea>
                      <v-card-actions>
                          <Icon style="padding-left:10px" v-bind:note="items" />
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
          </v-card>
        </v-content>
      </v-main>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
import Icon from "../Icon";
export default {
  name: "ArchiveNotes",
  props:["notes"],
  components: {
    Icon
  },
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
      try{
        const noteDetails = {
          noteIdList: [key],
          isArchived: true
        };
        const token = localStorage.getItem("access_token");
        await notes.archiveNote(noteDetails, token);
        alert("Note Archived Successfully");
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
    getId(items){
      return items;
    }
  },
  mounted() {
    this.getAllNotes();
    this.getId();
  }
};
</script>
