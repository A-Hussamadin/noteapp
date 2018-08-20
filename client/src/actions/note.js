import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, GET_NOTE, UPDATE_NOTE } from '../types';
import { fetch_notes_API, add_note_API, delete_note_API, get_note_API, update_note_API } from '../api';
export const fetchNotesAction = (notes) => ({
    type: FETCH_NOTES,
    notes
});



export const addNoteAction = (note) => ({
    type: ADD_NOTE,
    note
})

export const deleteNoteAction = (note) => ({
    type: DELETE_NOTE,
    note
})

export const getNoteAction = (note) => ({
    type: GET_NOTE,
    note
})

export const updateNoteAction = (note) => ({
    type: UPDATE_NOTE,
    note
})

export function fetchNots(user) {
    return function (dispatch) {
        return fetch_notes_API(user).then(notes => {
            //console.log(response);
            // localStorage.notappJWT = user.token;
            dispatch(fetchNotesAction(notes))
        });
    }
}

export function addNote(user, note) {
    return function (dispatch) {
        return add_note_API(user, note).then((note) => {
            dispatch(addNoteAction(note));
        });
    }
}

export function deleteNote(user, noteId) {
    //  console.log(noteId);
    return function (dispatch) {
        return delete_note_API(user, noteId).then((note) => {

            dispatch(deleteNoteAction(note));
        });
    }
}

export function getNote(user, noteId) {

    return function (dispatch) {
        return get_note_API(user, noteId).then((note) => {

            dispatch(getNoteAction(note));
        });
    }
}

export function updateNote(user, noteId) {
    return function (dispatch) {
        return update_note_API(user, noteId).then((note) => {
            dispatch(updateNoteAction(note));
        });
    }
}
