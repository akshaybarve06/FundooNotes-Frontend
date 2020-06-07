<!-- 
* @Description :
*
* @file: App.vue
* @overview: App.vue is main page of VUE app
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <v-app class="yello loghten-4">
    <Navbar />
    <v-content>
      <router-view>

      </router-view>
    </v-content>
  </v-app>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name:'App',
  components:{ Navbar},
  data(){
    return{

    }
  }
}
</script>