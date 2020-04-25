// import userData from '../data/userData';
import appData from '../data/appData';



// const userDetails = userData;
const userDetails = appData.userDetails;

export default function user(state={userDetails},action){
    switch (action.type) {
       
        default:
            return{
                ...userDetails
            }
    }
}