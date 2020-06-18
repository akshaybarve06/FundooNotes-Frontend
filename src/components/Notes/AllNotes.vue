<!--
* @Description :
*
* @file: AllNotes.vue
* @overview: Showing All Notes
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 12/06/2020- Sunday
*
-->
<template>
  <nav>
    <div>
      <Navbar />
      <v-container >
        Hello
      </v-container>
    </div>
    
  </nav>
</template>
<script>
import user from "../../services/user.service";
import notes from "../../services/notes.service";
import Navbar from "../Notes/Navbar";
export default {
  components: { Navbar },
  data() {
    return {
      menuVisible: false,
      allNotes: []
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    createNote() {
      this.$router.push("/createnote");
    },
    logout() {
      try {
        const token = localStorage.getItem("access_token");
        const response = user.logout(token);
        this.snackbar = true;
        this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getNotes(token);
        this.allNotes = response.data.data;
        console.log(">>>>" + this.allNotes);
      } catch (error) {
        console.log("error" + error);
      }
    }
  },
  mounted() {
    this.getAllNotes();
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 500px;
}
.md-drawer {
  width: 270px;
}
.md-layout-item2 {
  width: 700px;
  margin-left: 500px;
  margin-top: 30px;
}
</style>