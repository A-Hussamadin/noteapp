import { combineReducers } from 'C:/Users/lenovo-com/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import user from './reducers/user';
import notes from './reducers/notes';

export default combineReducers({
    user,
    notes
})