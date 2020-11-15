import './App.css';
import React, { useReducer, useState } from 'react';
import Question from '../question';
import Board from '../board';
import reducer from '../reducer';

//create object - 6 categories with 2 questions each 
const questionBank = [
  {
    categoryName: 'life',
    questions: [
      {
        question: 'hi?',
        answer: 'ho'
      },
      {
        question: 'life greater than death',
        answer: 'always'
      }
    ]
  },
  {
    categoryName: 'animals',
    questions: [
      {
        question: 'inspires a popular song which asks what this animal sounds like',
        answer: 'fox'
      },
      {
        question: 'architect of species',
        answer: 'beaver'
      }
    ]
  },
];

function App() {
  // const [ {currentPoints}, setCurrentPoints ] = useState({currentPoints: 100});
  const [{ currentPoints, round }, dispatch] = useReducer(reducer, { currentPoints: 0, round: 1 });
  // const [{round}, dispatch] = useReducer(reducer, {round: 1})

  console.log('curr points initial', currentPoints)
  return (
    <div className="App">
      <Board questionBank={questionBank} />
      <Question currentPoints={currentPoints} round={round} />
    </div>
  );
}

export default App;
