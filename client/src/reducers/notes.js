import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, GET_NOTE, UPDATE_NOTE } from '../types';

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

        case GET_NOTE:
            return [action.note];

        case UPDATE_NOTE:

            return state.map(note => {
                return note._id === action.note._id ? (note = action.note) : note;
            });

        default:
            return state;
    }
}