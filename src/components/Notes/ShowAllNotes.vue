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
      <v-content>
        <v-card
          @click="getId(items)"
          style="margin: 5px"
          class="d-inline-flex"
          v-for="items in allNotes"
          :key="items.id"
        >
          <v-card @click="openDialog(items)">
            <v-layout>
              <v-flex xs10 class="pr-8">
                <v-card-title >{{items.title}}</v-card-title>
                <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
                <v-card-actions>
                  <Icon v-bind:note="items" v-bind:card="false" />
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
        <v-dialog width="500px"  v-model="dialog">
             <v-card padding=100px>
            <updateNote v-bind:noteDetails="newArray" ref="updatedNote"/>
             </v-card>
          </v-dialog>
      </v-content>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
import Icon from "../Icons/ShowNoteIcon";
import updateNote from "./UpdateNote";
export default {
  name: "ArchiveNotes",
  props: ["notes", "card"],
  components: {
    updateNote,
    Icon
  },
  data() {
    return {
      menuVisible: false,
      isdisplay: true,
      allNotes: [],
      newArray:[],
      response: "",
      dialog:""
    };
  },
  methods: {
    openDialog(items) {
      this.newArray=items
      this.dialog=true
    },
    async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getNotes(token);
        const showSelected = response.data.data;
        this.allNotes = showSelected.filter(function(inputNote) {
          return inputNote.isArchived == false && inputNote.isDeleted == false;
        });
      } catch (error) {
        console.log("error" + error);
      }
    },
    getId(items) {
      return items;
    }
  },
   created() {
     this.$root.$refs.ShowAllNotes = this;
     this.$refs.updatedNote.getAllNotes();
   },
  mounted() {
    this.getAllNotes();
    this.getId();
  }
};
</script>