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
  const [ currentPoints, dispatch ] = useReducer(reducer, props.currentPoints);
  const [input, setInput] = useState('');
  // const pointsWorth = props.pointsWorth;
  const pointsWorth = 100;
  //question will have question prompt
  //input form
  //submit button
  //validating screen 
  //correct or wrong 

  //create function to validate answer - if valid, increase money by points question is worth
  function validateAnswer (actual, input, pointsFromQuestion) {
    if (actual === input) {
      //change points total state by points
      dispatch({type: 'incrementPoints', amount: pointsFromQuestion});
    }
  }
  //question component sets state for points total

  return (
    <div className="question-div">
      <p>{currentPoints}</p>
      <button onClick={() => validateAnswer('bob', 'bob', pointsWorth)}></button>
    </div>
  )
}
