import { useEffect, useReducer } from "react"
import axios from 'axios';


import reducer from '../components/reducer';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    currentPoints: 0, 
    round: 1, 
    question: '', 
    answer: '', 
    questionClicked: false,
    questionsRemaining: 6
  });

  function validateAnswer (actual, input, pointsFromQuestion, questionsLeft) {
    console.log('you got it!')
    if (questionsLeft <= 0) {
      dispatch({type: 'incrementRound'});
    } else {
      dispatch({type: 'reduceQuestionsRemaining'});
    }
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