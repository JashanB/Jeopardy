import React, { useState, useReducer } from 'react';
import './Question.css';
import reducer from '../reducer';

function Question(props) {
  // const [ { currentPoints, round }, dispatch ] = useReducer(reducer, {currentPoints: props.currentPoints, round: props.round});
  const [input, setInput] = useState('');
  // const [questionsRemaining, setQuestionsRemaining] = useState(6);
  // const pointsWorth = props.pointsWorth;
  const pointsWorth = 100;
  //question will have question prompt
  //input form
  //submit button
  //validating screen 
  //correct or wrong 

  //create function to validate answer - if valid, increase money by points question is worth
  // function validateAnswer (actual, input, pointsFromQuestion) {
  //   console.log('you got it!')
  //   minusQuestions(questionsRemaining);
  //   if (actual === input) {
  //     //change points total state by points
  //     dispatch({type: 'incrementPoints', amount: pointsFromQuestion});
  //   }
  // }
  //question component sets state for points total

  // function minusQuestions (questionCount) {
  //   if (questionCount <= 0) {
  //     dispatch({type: 'incrementRound'});
  //     setQuestionsRemaining(state => 6);
  //   } else {
  //     setQuestionsRemaining(state => state-= 1);
  //   }
  // }
  //make function to check if round 2 is ending and points = 0 => show game over
  function handleSubmit (event) {
    event.preventDefault();
  };

  // function minimizeButton () {
  //   dispatch({type: 'setQuestionUnclicked'})
  // }
  return (
    <div className="question-div">
      <button onClick={() => props.clickerTest(props.count)}>Increment Me</button>
      <p>{props.clicker}</p>
      {/* <button className="minimize" onClick={() => props.minimizeButton()}>Minimize</button>
      <p>{props.question}</p>
      <form className="answer-form" autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              id="answer-input"
              placeholder="Type your answer here"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
          </form>
      <button onClick={() => props.validateAnswer(props.question, props.answer, pointsWorth, props.questionsRemaining)}>Submit</button> */}
    </div>
  )
}

export default Question = React.memo(Question)