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

import service from "./service"

const url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/'
const token = localStorage.getItem("access_token");

export default {

  addNote(noteDetails) {
    console.log("Inside Notes service...")
    return service.postData(url, `addNotes?access_token=${token}`, noteDetails)
  },
  archiveNote(noteDetails) {
    return service.postData(url, `archiveNotes?access_token=${token}`, noteDetails)
  },
  updateNote(noteDetails) {
    return service.postData(url, `updateNotes?access_token=${token}`, noteDetails)
  },
  getNotes() {
    return service.getNotes(url, `getNotesList?access_token=${token}`)
  },
  deleteNoteForever(noteDetails) {
    return service.postData(url, `deleteForeverNotes?access_token=${token}`, noteDetails)
  },
  deleteNote(noteDetails) {
    return service.postData(url, `trashNotes?access_token=${token}`, noteDetails)
  },
  getArchiveNotesList() {
    return service.getNotes(url, `getArchiveNotesList?access_token=${token}`)
  },
  getAllTrashNotes() {
    return service.getNotes(url, `getTrashNotesList?access_token=${token}`)
  },
  addCollaboratorNotes(id, noteDetails) {
    return service.postWithId(url, `${id}` + `/AddcollaboratorsNotes?access_token=${token}`, noteDetails)
  }
}
