import cake from './cake_reducer';
import user from './user_reducer';
import currentUser from './currentUser_reducer';
import {combineReducers} from 'redux';

import cardDescription from './cardDescription_reducer';
const rootReducer= combineReducers({
    cake:cake,
    user:user,
    currentUser:currentUser,
   
    cardDescription:cardDescription
});
    
export default rootReducer;