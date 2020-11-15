import React, { useState, useReducer } from 'react';
import './Question.css'


function reducer (state, action) {
  console.log(action)
  switch(action.type) {
    case 'incrementPoints':
      return state + action.amount;
    default:
      return state;
  }
}

export default function Question(props) {
  const [ money, dispatch ] = useReducer(reducer, 0);
  const [input, setInput] = useState('');
  const pointsWorth = props.pointsWorth;

  //question will have question prompt
  //input form
  //submit button
  //validating screen 
  //correct or wrong 

  //create function to validate answer - if valid, increase money by points question is worth
  function validateAnswer (actual, input, points) {
    if (actual === input) {
      //change points total state by points
      dispatch({type: 'incrementPoints', amount: points});
    }
  }
  //question component sets state for points total

  return (
    <div className="question-div">
      
    </div>
  )
}
