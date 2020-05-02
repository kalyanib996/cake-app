// import userData from '../data/userData';
import appData from '../data/appData';



// const userDetails = userData;
const userDetails = appData.userData;

export const user=(state={userDetails},action)=>{
    console.log("IN USER REDUCER")
    switch (action.type) {
       
        default:
            return{
                ...userDetails
            }
    }
}