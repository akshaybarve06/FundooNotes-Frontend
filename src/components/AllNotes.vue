<template>
    <div id="allnotes">
    <Navbar />
            <h1>All Notes</h1>
    </div>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
    components: { Navbar },
    name: "AllNotes",
    props: {
        msg: String
    },
    data() {
        return {
            response: ""
        };
    },
}

</script>