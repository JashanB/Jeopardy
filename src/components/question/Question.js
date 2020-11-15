import React, { useState, useReducer } from 'react';
import './Question.css';
import reducer from '../reducer';


// function reducer (state, action) {
//   console.log(action)
//   switch(action.type) {
//     case 'incrementPoints':
//       return state + action.amount;
//     default:
//       return state;
//   }
// }

export default function Question(props) {
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
  console.log('curr points ques', currentPoints)
  console.log('q remaining', questionsRemaining)
  console.log('q round', round)
  return (
    <div className="question-div">
      <p>{currentPoints}</p>
      <p>{round}</p>
      <button onClick={() => validateAnswer('bob', 'bob', pointsWorth)}>CLICK ME</button>
    </div>
  )
}
