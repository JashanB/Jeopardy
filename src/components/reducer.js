// import { useReducer } from 'react';

export default function reducer (state, action) {
  console.log(action)
  console.log('state', {state})
  switch(action.type) {
    case 'incrementPoints':
      return {
        ...state,
        currentPoints: state.currentPoints + action.amount
      };
    case 'incrementRound':
      return {
        ...state,
        round: state.round + 1
      };
    case 'setQuestionAndAnswer':
        return {
          ...state,
          question: action.question,
          answer: action.answer
        };
    case 'setQuestionClicked':
        return {
          ...state,
          questionClicked: true
        };
    case 'setQuestionUnclicked':
        return {
          ...state,
          questionClicked: false
        };
    default:
      return state;
  }
}