// import { useReducer } from 'react';

export default function reducer (state, action) {
  console.log(action)
  console.log('state', {state})
  switch(action.type) {
    case 'incrementPoints':
      return state.currentPoints + action.amount;
    case 'incrementRound':
      return state.round + 1;
    default:
      return state;
  }
}