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
    <Navbar />
    <button data-toggle="collapse" data-target="#demo">Collapsible</button>
    <div id="demo" class="collapse">Lorem ipsum dolor text....</div>
  </v-app>
</template>
<script>
import Navbar from "../components/Navbar";
export default {
  components: { Navbar },
  data() {
    return {};
  }
};
</script>