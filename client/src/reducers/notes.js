import { FETCH_NOTES, SEARCH_NOTES } from '../types';
const initialState = {
    searchText: '',
    notes: []
};
export default function notes(state = initialState, action = {}) {

    switch (action.type) {
        case FETCH_NOTES:
            return state.notes = action.notes;
        case SEARCH_NOTES:

        default:
            return state;
    }
}