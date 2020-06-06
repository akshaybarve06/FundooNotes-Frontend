<template>
  <nav>
    <v-toolbar flat app color="amber accent-3" height="70px" tile>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">Fundoo Notes</span>
        <span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        dense
        class="ml-2"
        v-model="search"
        placeholder="Search.."
        prepend-icon="mdi-magnify"
        :append-icon-cb="() => (openSearch = !openSearch)"
        hide-details
      ></v-text-field>
    <v-icon class="ma-5 pa-4">
        mdi-cart
    </v-icon>
    <v-icon class="ma-5 pa-4">
        mdi-view-agenda
    </v-icon>
    <v-icon class="ma-5 pa-4">
        mdi-account
    </v-icon>
    </v-toolbar>
  </nav>
</template>
<script>
export default {};
</script>