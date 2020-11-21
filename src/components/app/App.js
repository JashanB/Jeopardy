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
    category: 'FAIRY TALES',
    round1: [
      {
        key: 'r1c1q1',
        question: 'She couldn\'t bear certain bowls, beads, and chairs.',
        answer: 'Goldilocks'
      },
      {
        key: 'r1c1q2',
        question: 'A little girl outsmarts a wolf.',
        answer: 'Little Red Riding Hood'
      },
      {
        key: 'r1c1q3',
        question: 'Big things can come from small magical things.',
        answer: 'Jack and the Beanstalk'
      },
      {
        key: 'r1c1q4',
        question: 'Two kids get lost in the woods and encounter danger in a sweet place.',
        answer: 'Hansel and Gretel'
      }
    ],
    round2: [
      {
        key: 'r2c1q1',
        question: 'Ate a poisoned apple.',
        answer: 'Snow White'
      },
      {
        key: 'r2c1q2',
        question: 'She went from rags to ritches.',
        answer: 'Cinderella'
      },
      {
        key: 'r2c1q3',
        question: 'She was taken hostage and held in a tower.',
        answer: 'Rapunzel'
      },
      {
        key: 'r2c1q4',
        question: 'Jack traded this animal for magic beans.',
        answer: 'Cow'
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
  // const [{ currentPoints, round, question, answer, questionClicked }, dispatch] = useReducer(reducer, { 
  //   currentPoints: 0, round: 1, question: '', answer: '', questionClicked: false 
  // });
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
          question={state.question} 
          answer={state.answer}
        />}
      <Footer currentPoints={state.currentPoints}/>
    </div>
  );
}

export default App;
