import { FETCH_NOTES, SEARCH_NOTES } from '../types';
import { fetch_notes_API } from '../api';
export const fetchNotesAction = (notes) => ({
    type: FETCH_NOTES,
    notes
});

export const searchNotesAction = (value) => ({
    type: SEARCH_NOTES,
    value
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

