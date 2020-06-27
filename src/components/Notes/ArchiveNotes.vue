<!--
* @Description :
*
* @file: ArchiveNotes.vue
* @overview: ArchiveNotes.vue is component for showing all archive notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 16/06/2020- Tuesday
*
-->
<template>
  <v-app>
    <div class="container">
      <v-main >
            <v-card @click="getId(items)"
              style="margin: 7px"
              class="d-inline-flex"
              v-for="items in allNotes"
              :key="items.id"
            >
              <v-layout>
                <v-flex xs12 class="pr-3">
                  <v-card-title>{{items.title}}</v-card-title>
                  <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
                  <ArchiveIcon style="padding-left:5px" v-bind:note="items"/>   
                </v-flex>
              </v-layout>
            </v-card>
      </v-main>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
import ArchiveIcon from "../Icons/ArchiveNoteIcon";
export default {
  name:"ArchiveNotes",
  components:{
    ArchiveIcon
  },
  data() {
    return {
      menuVisible: false,
      isdisplay: true,
      allNotes: [],
      response: ""
    };
  },
  methods: {
    async getArchiveNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getArchiveNotesList(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    },
    getId(items){
      return items;
    }
  },
  created(){
    this.$root.$refs.ShowAllArchiveNotes=this;
  },
  mounted() {
    this.getArchiveNotes();
    this.getId();
  }
};
</script>
