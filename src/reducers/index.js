import cake from './cake_reducer';
import user from './user_reducer';
import currentUser from './currentUser_reducer';
import {combineReducers} from 'redux';

const rootReducer= combineReducers({
    cake:cake,
    user:user,
    currentUser:currentUser
});
    
export default rootReducer;