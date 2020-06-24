<template>
  <div>
    <div>
      <CreateNote @updateNote="update($event)"/>
    </div>
  </div>
</template>
<script>
import notes from "../../services/notes.service";
import CreateNote from "./CreateNote";
export default {
  components: {
    CreateNote,
  },
  data:()=>{
    return {
      allNotes: []
    };
  },
  methods: {
    async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getNotes(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    },
  },
  mounted() {
    this.getAllNotes();
  }
};
</script>