// import { useReducer } from 'react';

export default function reducer (state, action) {
  console.log(action)
  console.log('state', {state})
  switch(action.type) {
    case 'incrementPoints':
      return {
        currentPoints: state.currentPoints + action.amount,
        round: state.round
      };
    case 'incrementRound':
      return {
        currentPoints: state.currentPoints,
        round: state.round + 1
      };
    default:
      return state;
  }
}