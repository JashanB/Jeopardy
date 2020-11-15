import React, { useState, useReducer } from 'react';
import './Question.css';
import reducer from '../reducer';

function Question(props) {
  const [ { currentPoints, round }, dispatch ] = useReducer(reducer, {currentPoints: props.currentPoints, round: props.round});
  const [input, setInput] = useState('');
  const [questionsRemaining, setQuestionsRemaining] = useState(6);
  // const pointsWorth = props.pointsWorth;
  const pointsWorth = 100;
  //question will have question prompt
  //input form
  //submit button
  //validating screen 
  //correct or wrong 

  //create function to validate answer - if valid, increase money by points question is worth
  function validateAnswer (actual, input, pointsFromQuestion) {
    minusQuestions(questionsRemaining);
    if (actual === input) {
      //change points total state by points
      dispatch({type: 'incrementPoints', amount: pointsFromQuestion});
    }
  }
  //question component sets state for points total

  function minusQuestions (questionCount) {
    if (questionCount <= 0) {
      dispatch({type: 'incrementRound'});
      setQuestionsRemaining(state => 6);
    } else {
      setQuestionsRemaining(state => state-= 1);
    }
  }
  //make function to check if round 2 is ending and points = 0 => show game over

  return (
    <div className="question-div">
      <p>{currentPoints}</p>
      <p>{round}</p>
      <button onClick={() => validateAnswer('bob', 'bob', pointsWorth)}>CLICK ME</button>
    </div>
  )
}

export const Question = React.memo(Question)