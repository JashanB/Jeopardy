import { useReducer } from "react"
import reducer from '../components/reducer';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    currentPoints: 0, 
    round: 1, 
    question: '', 
    answer: '', 
    questionClicked: false,
    questionsRemaining: 16,
    pointsForQuestion: 0
  });
  //question functions
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

  //tile functions
  function handleTileClick(clickable, tileQuestion, tileAnswer, pointsWorth) {
    if (clickable) {
      dispatch({type: 'setQuestionClicked'});
      dispatch({type: 'setQuestionAndAnswerAndPoints', question: tileQuestion, answer: tileAnswer, pointsWorth: pointsWorth});
    }
  }

  return { state, validateAnswer, minimizeButton, handleTileClick }
}