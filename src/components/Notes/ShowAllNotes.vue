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
          v-for="items in allNotes.slice().reverse()"
          :key="items.id"
        >
          <v-card >
            <v-layout>
              <v-flex xs12 class="pr-5">
                <v-card v-model="showImage">
                </v-card>
                <v-card-title @click="openDialog(items)">{{items.title}}</v-card-title>
                <v-textarea flat solo rows="1" v-model="items.description" @click="openDialog(items)" auto-grow></v-textarea>
                <v-card-actions>
                  <Icon v-bind:note="items" v-bind:card="false" v-on:imageUrl="showImageInCard($event)"/>
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
  props: ["notes", "card", "image"],
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
      imageURL:"",
      dialog:"",
      showImage:"",
    };
  },
  methods: {
    openDialog(items) {
      this.newArray=items
      this.dialog=true
    },
    closeDialog() {
      this.dialog=false
    },
    showImageInCard(image){
      console.log("Inside Show Image Method")
      this.showImage=true
      this.imageURL=image
    },
    async getAllNotes() {
      try {
        const response = await notes.getNotes();
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
     this.$root.$refs.updatedNote = this;
   },
  mounted() {
    this.getAllNotes();
    this.getId();
  }
};
</script>