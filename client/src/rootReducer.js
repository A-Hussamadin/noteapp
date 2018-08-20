import { combineReducers } from 'redux';
import user from './reducers/user';
import notes from './reducers/notes';

const rootReducer = combineReducers({
    user,
    notes
})

export default rootReducer;