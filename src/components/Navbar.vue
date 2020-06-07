<!-- 
* @Description :
*
* @file: Navbar.vue
* @overview: Navbar.vue is for navigation in pages
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 04/06/2020- Thursday
*
-->
<template>
  <nav>
    <v-toolbar flat app height="70px" class="amber accent-3">
      <v-icon class="gray--text" @click="drawer= !drawer">mdi-reorder-horizontal</v-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="ma-5 pa-4 font-weight-light">Fundoo Notes</span>
        <span></span>
      </v-toolbar-title>
      <v-text-field
        dense
        class=" ma-5 pa-7"
        v-model="search"
        placeholder="Search.."
        prepend-icon="mdi-magnify"
        :append-icon-cb="() => (openSearch = !openSearch)"
        hide-details
      ></v-text-field>
      <v-icon class="ma-3 pa-4">mdi-cart</v-icon>
      <v-icon class="ma-3 pa-4">mdi-view-agenda</v-icon>
      <v-icon class="ma-3 pa-4">mdi-account</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Options</v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="mdi-24px">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="mdi-24px">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-col cols="8" sm="12">
        <p>Lables</p>
        <v-overflow-btn
          class="my-2"
          :items="dropdown_icon"
          label="All Lables"
          segmented
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items2" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="mdi-24px">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="mdi-24px">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Note", icon: "mdi-lightbulb" },
        { title: "Reminder", icon: "mdi-calendar-clock" }
      ],
      items2: [
        { title: "Archives", icon: "mdi-clipboard-arrow-down" },
        { title: "Trash", icon: "mdi-delete" }
      ],
      dropdown_icon: [
        { text: "New", callback: () => console.log("list") },
        { text: "Favorite", callback: () => console.log("favorite") },
        { text: "General", callback: () => console.log("delete") }
      ],
      right: null
    };
  }
};
</script>