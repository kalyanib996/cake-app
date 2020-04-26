// import currentUserData from '../data/currentUserData';
import appData from '../data/appData';

// const currentLoggedUser = currentUserData.currentUser;
const currentLoggedUser = appData.currentUserData;
const  currentUser=(state=currentLoggedUser,action)=>{

    switch (action.type) {
        case 'SET_USER':
            let user_data = action.data.user;
            let flag=action.data.flag;
            console.log("Inside Reducer set user")
            console.log(user_data,flag)
            return Object.assign({}, state, {
                loggedUsername: user_data,
                currentUser:flag
            })
        default:
            return {...currentLoggedUser}
                        
    }
}
export default currentUser;
