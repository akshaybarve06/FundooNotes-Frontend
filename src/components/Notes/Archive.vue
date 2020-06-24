<template>
    <div>
        <div>
            <ArchiveNotes />
        </div>
        <div class="getNotes">
            <getNotes v-bind:card="allNotes" />
        </div>
    </div>
</template>
<script>
import notes from "../../services/notes.service";
import ArchiveNotes from "./ArchiveNotes"
export default {
    components:{
        ArchiveNotes,
    },
    data(){
        return{
        allNotes:[],
        };
    },
    methods:{
        async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getArchiveNotesList(token);
        this.allNotes = response.data.data;
      } catch (error) {
        console.log("error" + error);
      }
    }
    },
    mounted(){
        this.getAllNotes
    }

}
</script>