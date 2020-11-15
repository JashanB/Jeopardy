import { useReducer } from 'react';

export default function reducer (state, action) {
  console.log(action)
  switch(action.type) {
    case 'incrementPoints':
      return state + action.amount;
    default:
      return state;
  }
}