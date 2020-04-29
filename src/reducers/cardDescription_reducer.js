import appData from '../data/appData';

const selectedCake = appData.selectedCake;

export default function setCakeId(state = selectedCake, action) {
  console.log("IN CAKE DESCRIPTION REDUCER", action.cakeId)

  switch (action.type) {
    case 'SET_CAKE_ID':

      return Object.assign({}, state, {
        selectedCake: action.cakeId

      })
    default:
      return {
        ...selectedCake
      }
  }

}