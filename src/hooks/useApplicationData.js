import { useEffect, useReducer } from "react"
import axios from 'axios';


import reducer from '../components/reducer';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    currentPoints: 0, 
    round: 1, 
    question: '', 
    answer: '', 
    questionClicked: false
  });

  function validateAnswer (actual, input, pointsFromQuestion) {
    console.log('you got it!')
    minusQuestions(questionsRemaining);
    if (actual === input) {
      //change points total state by points
      dispatch({type: 'incrementPoints', amount: pointsFromQuestion});
    }
  }

  function minimizeButton () {
    dispatch({type: 'setQuestionUnclicked'})
  }


  return { state, validateAnswer, minimizeButton, cancelInterview }
}