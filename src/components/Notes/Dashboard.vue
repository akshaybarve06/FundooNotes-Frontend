<template>
  <v-app id="inspire">
    <v-content>
      <Navbar />

    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../Notes/Navbar'
export default {
  name:'App',
  components:{ Navbar},
  data(){
    return{

    }
  }
}
</script>