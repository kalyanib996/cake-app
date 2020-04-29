// import currentUserData from '../data/currentUserData';
import appData from '../data/appData';

// const currentLoggedUser = currentUserData.currentUser;
console.log("sirf reducer me aaya")
const currentLoggedUser = appData.currentUserData;
console.log("jab reducer me aaya aur cuurentlogged ..state se uthaya",currentLoggedUser)
const  currentUser=(state=currentLoggedUser,action)=>{
    console.log("IN CURRENTUSER REDUCER")
    console.log("IN CURRENTUSER REDUCER",currentLoggedUser,"case me jane se pehle",state)
    console.log(action.type)
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

            case 'SET_USER_FLAG_FALSE':
            console.log("Inside Reducer set user FALSE")
            
            return Object.assign({}, state, {
                currentUser:action.user_flag
                
            })

        default:
            return state
                        
    }
}
export default currentUser;
