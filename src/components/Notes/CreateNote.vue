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
        <md-app-toolbar fixed app class="amber">
          <md-button class="md-icon-button" @click="toggleMenu">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title" style="margin: 14px">FUNDOO NOTES</span>
          <v-spacer></v-spacer>
          <v-text-field style="margin-top: 14px " outlined dense placeholder="Search.."></v-text-field>
          <v-spacer></v-spacer>
          <md-button style="margin-right: 14px">
            <md-icon>shopping_cart</md-icon>
          </md-button>
          <md-button style="margin-right: 14px">
            <md-icon>view_agenda</md-icon>
          </md-button>
          <md-button style="margin-right: 14px" @click="logout()">
            <md-icon>portrait</md-icon>
          </md-button>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped" md-persistent="mini">
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
          <div style="margin-bottom: 15px">
            <v-card class="md-layout-item1" v-show="isdisplay" @click="openCard()">
              <v-text-field flat placeholder="Take A Note " solo></v-text-field>
            </v-card>
            <v-card class="md-layout-item2" v-show="!isdisplay">
              <v-text-field flat solo rows="1" v-model="input.title" row-height="10" label="Title"></v-text-field>
              <v-textarea
                flat
                solo
                rows="1"
                v-model="input.description"
                row-height="10"
                label="Take A Note"
                auto-grow
              ></v-textarea>
              <v-card-actions>
                <v-btn @click="reminder()" text>
                  <md-icon class="material-icons">notifications_active</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">person_add</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">palette</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">panorama</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">archive</md-icon>
                </v-btn>
                <v-btn text>
                  <md-icon class="material-icons">more_vert</md-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click="closeCard()">close</v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <v-content>
            <v-card
              style="margin: 7px"
              class="d-inline-flex"
              v-for="items in allNotes"
              :key="items.id"
            >
              <v-layout>
                <v-flex xs8 class="pr-3">
                  <v-card-title>{{items.title}}</v-card-title>
                  <v-card-text>{{items.description}}</v-card-text>
                  <v-card-actions>
                    <v-btn icon>
                      <md-icon class="material-icons">notifications_active</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">person_add</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">palette</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">panorama</md-icon>
                    </v-btn>
                    <v-btn icon>
                      <md-icon class="material-icons">archive</md-icon>
                    </v-btn>
                    <v-btn @click="reminder()" icon>
                      <md-icon class="material-icons">more_vert</md-icon>
                    </v-btn>
                  </v-card-actions>
                  <div width="200px" id="show" style="display:none;">
                     <div class="md-layout md-gutter">
                  <div class="md-lable2">
                      <md-card width="200px" height="500px">
                        <md-field>
                          <md-btn text @click="deleteNote(items.id)">Delete Note</md-btn>
                        </md-field>
                      </md-card>
                  </div>
                     </div>
                  </div>
                  <div width="100px" id="show" style="display:none;">
                    <div class="md-layout md-gutter">
                      <div class="md-lable">
                        <md-card width="100px">
                          <md-field>
                            <label>Set Reminder</label>
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
                </v-flex>
              </v-layout>
            </v-card>
          </v-content>
        </md-app-content>
      </md-app>
    </div>
  </nav>
</template>
<script>
import user from "../../services/user.service";
import notes from "../../services/notes.service";
export default {
  data() {
    return {
      menuVisible: false,
      isdisplay: true,
      allNotes: [],
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
    openCard() {
      this.isdisplay = false;
    },
    closeCard() {
      if (this.input.title != " " && this.input.description != " ") {
        try {
          const noteDetails = {
            title: this.input.title,
            description: this.input.description,
            reminder: this.input.reminder
          };
          const token = localStorage.getItem("access_token");
          const response = notes.addNote(noteDetails, token);
          if (response.status == 200) {
            alert("Note Added Successfully...");
            this.$router.push("/allnotes");
          }
        } catch (error) {
          console.log(error);
        }
      } else this.isdisplay = true;
    },
    logout() {
      try {
        const token = localStorage.getItem("access_token");
        const response = user.logout(token);
        alert("Logout Successful...");
        this.snackbar = true;
        this.msg = response.msg;
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    reminder() {
      var x = document.getElementById("show");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else if (x.style.display === "none") {
        x.style.display = "block";
      }
    },
    async getAllNotes() {
      try {
        const token = localStorage.getItem("access_token");
        const response = await notes.getNotes(token);
        this.allNotes = response.data.data;
        console.log("All Notes...." + this.allNotes);
      } catch (error) {
        console.log("error" + error);
      }
    },
    async deleteNote(key){
      try {
        const noteDetails={
          noteIdList:[key],
          isArchived:false
        }
        const token = localStorage.getItem("access_token");
        const response = await notes.deleteNoteForever(noteDetails, token);
        alert("response"+response)
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
.md-drawer {
  width: 270px;
}
.md-show-note {
  width: 600px;
  height: 50px;
  margin-left: 250px;
  margin-top: 30px;
}
.md-layout-item {
  height: 10px;
  width: 450px;
  margin-left: 20px;
  margin-top: 50px;
}
.md-lable {
  width: 300px;
  margin-left: 30px;
}
.md-lable2 {
  width: 200px;
  margin-left: 200px;
}
.md-layout-item1 {
  width: 540px;
  height: 50px;
  margin-left: 260px;
  margin-top: 30px;
}
.md-layout-item2 {
  width: 540px;
  margin-left: 260px;
  margin-top: 30px;
}
</style>