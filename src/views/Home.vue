<!-- 
* @Description :
*
* @file: Home.vue
* @overview: Home.vue is home page of vue app
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 27/05/2020- Wednesday
*
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Helloworld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
