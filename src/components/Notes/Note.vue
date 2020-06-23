<template>
    <div>
        <div>
            <CreateNote />

            <ShowNotes />
        </div>
    </div>
</template>
<script>
import CreateNote from "./CreateNote"
import ShowNotes from "./ShowAllNotes"
export default {
    components:{
        CreateNote,
        ShowNotes
    }
}
</script>