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
          <v-card>
            <v-layout>
              <v-flex xs12 class="pr-10">
                <v-card-title>{{items.title}}</v-card-title>
                  <v-textarea flat solo rows="1" v-model="items.description" auto-grow></v-textarea>
                <v-card-actions>
                  <Icon v-bind:note="items" v-bind:card="false" />
                </v-card-actions>               
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-content>
    </div>
  </v-app>
</template>
<script>
import notes from "../../services/notes.service";
import Icon from "../Icon";
export default {
  name: "ArchiveNotes",
  props: ["notes", "card"],
  components: {
    Icon
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
  },
  mounted() {
    this.getAllNotes();
    this.getId();
  }
};
</script>