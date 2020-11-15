// import { useReducer } from 'react';

export default function reducer (state, action) {
  console.log(action)
  console.log('state', {state})
  switch(action.type) {
    case 'incrementPoints':
      return {
        currentPoints: state.currentPoints + action.amount
      };
    case 'incrementRound':
      return {
        round: state.round + 1
      };
    default:
      return state;
  }
}