/*
* @Description :
*
* @file: note.Service.js
* @overview: Note.service.js is file for API Integration
* @author: Akshay Dhananjay Barve
* @version: 20.04
* @since: 08/06/2020- Monday
*
*/

import axios from "axios";

const url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/'

export default {
  addNote(noteDetails, token) {
    return axios
      .post(url + `addNotes?access_token=${token}`, noteDetails)
      .then(response => response.data)
  },
  getNotes(token) {
    return axios
      .get(url + `/getNotesList?access_token=${token}`)
      .then(response => response.data)
  },
  deleteNoteForever(noteDetails, token) {
    return axios
      .post(url + `/deleteForeverNotes?access_token=${token}`,noteDetails)
      .then(response => response.data)
  }
}
