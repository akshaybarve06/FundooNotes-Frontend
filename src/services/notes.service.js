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
      .catch((error) => {
        return error;
      });
  },
  archiveNote(noteDetails, token) {
    return axios
      .post(url + `archiveNotes?access_token=${token}`, noteDetails)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  updateNote(noteDetails, token) {
    return axios
      .post(url + `updateNotes?access_token=${token}`, noteDetails)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  getNotes(token) {
    return axios
      .get(url + `getNotesList?access_token=${token}`)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  deleteNoteForever(noteDetails, token) {
    return axios
      .post(url + `deleteForeverNotes?access_token=${token}`, noteDetails)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  deleteNote(noteDetails, token) {
    return axios
      .post(url + `trashNotes?access_token=${token}`, noteDetails)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  getArchiveNotesList(token) {
    return axios
      .get(url + `getArchiveNotesList?access_token=${token}`)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  },
  getAllTrashNotes(token) {
    return axios
      .get(url + `getTrashNotesList?access_token=${token}`)
      .then(response => response.data)
      .catch((error) => {
        return error;
      });
  }
}