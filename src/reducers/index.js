import cake from './cake_reducer';
import user from './user_reducer';
import currentUser from './currentUser_reducer';
import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer= combineReducers({
    cake:cake,
    user:user,
    currentUser:currentUser,
    toastr: toastrReducer
});
    
export default rootReducer;