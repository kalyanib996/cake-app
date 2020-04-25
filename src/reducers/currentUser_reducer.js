// import currentUserData from '../data/currentUserData';
import appData from '../data/appData';

// const currentLoggedUser = currentUserData.currentUser;
const currentLoggedUser = appData.currentUserData;
const  currentUser=(state=currentLoggedUser,action)=>{
    switch (action.type) {
        default:
            return {...currentLoggedUser}
                        
    }
}
export default currentUser;
