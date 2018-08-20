import { FETCH_NOTES, SEARCH_NOTES, ADD_NOTE, DELETE_NOTE } from '../types';
const initialState = {
    notes: []
};
export default function notes(state = [], action = {}) {

    switch (action.type) {
        case FETCH_NOTES:
            return action.notes;
        case ADD_NOTE:
            return [...state, action.note];
        case DELETE_NOTE:
            const newState = state.filter(note => {
                return note._id !== action.note._id;
            });
            return newState;
        default:
            return state;
    }
}