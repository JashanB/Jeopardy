import './App.css';
import React, { useReducer, useState } from 'react';
import Question from '../question';
import Board from '../board';
import reducer from '../reducer';
import Footer from '../footer';
import useApplicationData from "../../hooks/useApplicationData";

//create object - 6 categories with 2 questions each 
const questionBank = [
  {
    category: 'life',
    questions: [
      {
        key: 'c1q1',
        question: 'hi?',
        answer: 'ho'
      },
      {
        key: 'c1q2',
        question: 'life greater than death',
        answer: 'always'
      },
      {
        key: 'c1q3',
        question: 'long thing',
        answer: 'yes'
      }
    ]
  },
  {
    category: 'animals',
    questions: [
      {
        key: 'c2q1',
        question: 'inspires a popular song which asks what this animal sounds like',
        answer: 'fox'
      },
      {
        key: 'c2q2',
        question: 'architect of species',
        answer: 'beaver'
      },
      {
        key: 'c2q3',
        question: 'flying rat',
        answer: 'pigeon'
      }
    ]
  },
];

function App() {
  // const [ {currentPoints}, setCurrentPoints ] = useState({currentPoints: 100});
  const [{ currentPoints, round, question, answer, questionClicked }, dispatch] = useReducer(reducer, { 
    currentPoints: 0, round: 1, question: '', answer: '', questionClicked: false 
  });
  const { 
    state,
    validateAnswer,
    minimizeButton,
    handleTileClick
  } = useApplicationData();
  // const [questionClicked, setQuestionClicked] = useState(false);
  //make function for if points box clicked, transistions to question (question can be overlayed over board)
  const pointsWorth = state.round * 100;
  return (
    <div className="App">
      <Board 
        displayValue={pointsWorth} 
        questionBank={questionBank} 
        handleTileClick={handleTileClick} 
        currentPoints={state.currentPoints} 
        round={state.round} 
      />
      {state.questionClicked && 
        <Question 
          pointsWorth={pointsWorth} 
          validateAnswer={validateAnswer} 
          minimizeButton={minimizeButton} 
          currentPoints={state.currentPoints} 
          round={state.round} 
          question={question} 
          answer={answer}
        />}
      <Footer currentPoints={state.currentPoints}/>
    </div>
  );
}

export default App;
