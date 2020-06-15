<!--
* @Description :
*
* @file: CreateNote.vue
* @overview: CreateNote.vue is component for creating new Note
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 07/06/2020- Sunday
*
-->
<template>
  <nav>
    <div>
      <md-app>
        <md-app-toolbar>
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="flex: 1">FUNDOO NOTES</span>
          <v-text-field dense placeholder="Search.." prepend-icon="search" hide-details></v-text-field>
          <md-icon style="margin: 20px">shopping_cart</md-icon>
          <md-icon style="margin: 20px">view_agenda</md-icon>
          <md-button style="margin: 14px" @click="logout()">Logout</md-button>
        </md-app-toolbar>

        <md-app-drawer
          fixed
          app
          clicked
          hide-overlay="true"
          class="grey lighten-4"
          :md-active.sync="menuVisible"
          md-persistent="full"
        >
          <md-toolbar class="md-transparent" md-elevation="2">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>close</md-icon>
              </md-button>
            </div>
          </md-toolbar>
          <br />
          <md-list>
            <md-list-item @click="createNote()">
              <md-icon>lightbulb_outline</md-icon>
              <span class="md-list-item-text">Note</span>
            </md-list-item>

            <md-list-item>
              <md-icon class="material-icons">add_alert</md-icon>
              <span class="md-list-item-text">Reminder</span>
            </md-list-item>
            <br />

            <md-divider></md-divider>
            <br />
            <md-list-item-subtitle>Lables</md-list-item-subtitle>
            <md-list-item>
              <md-icon class="material-icons">add</md-icon>
              <span class="md-list-item-text">Create New Lable</span>
            </md-list-item>
            <br />
            <md-divider></md-divider>
            <br />
            <md-list-item>
              <md-icon class="material-icons">archive</md-icon>
              <span class="md-list-item-text">Archive</span>
            </md-list-item>

            <md-list-item>
              <md-icon class="material-icons">delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>
            <md-list-item>
              <md-icon class="material-icons">help_outline</md-icon>
              <span class="md-list-item-text">Help</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <md-card class="md-layout-item2">
            <md-field class="md-layout-item">
              <label>Title</label>
              <md-input
                style="margin 50px"
                @click="popup()"
                v-model="input.title"
                placeholder="Take A Note"
              ></md-input>
            </md-field>
            <div id="showNote" style="display:none;">
              <md-card>
                <md-field style="margin 10px">
                  <label>Description</label>
                  <md-textarea outlined v-model="input.description"></md-textarea>
                  <md-icon>description</md-icon>
                </md-field>
              </md-card>

              <md-card-actions>
                <md-button @click="reminder()" class="md-icon-button">
                  <md-icon>notifications_active</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>person_add</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>palette</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>panorama</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>archive</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>more_vert</md-icon>
                </md-button>

                <md-button @click="newNote()" class="md-icon-button">Close</md-button>
              </md-card-actions>
              <div id="showReminder" style="display:none;">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    <md-card class="md-layout-item3">
                      <md-field>
                        <label style="margin-left: 10px">Set Reminder</label>
                        <md-select v-model="input.reminder">
                          <md-option value="xx/xx/xxxx">Later Today - 08.00 PM</md-option>
                          <md-option value="xx/xx/xxxx">Tomorrow - 08.00 AM</md-option>
                          <md-option value="xx/xx/xxxx">Next Week - MON 08.00 AM</md-option>
                          <md-datepicker>
                            <label>Select Custom Date</label>
                          </md-datepicker>
                        </md-select>
                      </md-field>
                    </md-card>
                  </div>
                </div>
              </div>
            </div>
          </md-card>
        </md-app-content>
      </md-app>
    </div>
  </nav>
</template>

<script>
import user from "../services/user.service";
import notes from "../services/notes.service";

export default {
  name: "PersistentFull",

  data() {
    return {
      menuVisible: false,
      input: {
        file: "",
        title: "",
        description: "",
        checklist: "",
        isPinned: "",
        isArchived: "",
        color: "",
        reminder: ""
      },
      response: ""
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
    async newNote() {
      try {
        const noteDetails = {
          title: this.input.title,
          description: this.input.description,
          reminder: this.input.reminder
        };
        const token = localStorage.getItem("access_token");
        await notes.addNote(noteDetails, token);
        this.$router.push("/allnotes");
      } catch (error) {
        console.log(error);
      }
    },
    popup() {
      var x = document.getElementById("showNote");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else if (x.style.display === "none") {
        x.style.display = "block";
      }
    },
    reminder() {
      var x = document.getElementById("showReminder");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else if (x.style.display === "none") {
        x.style.display = "block";
      }
    }
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
.md-layout-item {
  height: 10px;
  width: 450px;
  margin-left: 20px;
  margin-top: 50px;
}
.md-layout-item2 {
  width: 500px;
  margin-left: 500px;
  margin-top: 30px;
}
.md-layout-item3 {
  width: 200px;
  margin-left: 100px;
}
</style>