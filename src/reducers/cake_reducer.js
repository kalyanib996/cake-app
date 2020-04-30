// import cakeData from '../data/cakeData';
import appData from '../data/appData';

// import getCakes from '../actions/cake_action'




// const initialCakeState = cakeData;
const initialCakeState = appData.cake;
export default function cake(state=initialCakeState , action) {
    console.log("IN CAKE REDUCER")
    switch (action.type) {
        case 'GET_ALL_CAKES':
            return {
                cake: state
            }
        default:
            return{
                ...initialCakeState
            }
    }

}

