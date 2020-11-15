import './App.css';
import React, { useReducer, useState } from 'react';
import Question from '../question';
import Board from '../board';
import reducer from '../reducer';
import Footer from '../footer';

//create object - 6 categories with 2 questions each 
const questionBank = [
  {
    category: 'life',
    questions: [
      {
        question: 'hi?',
        answer: 'ho'
      },
      {
        question: 'life greater than death',
        answer: 'always'
      },
      {
        question: 'long thing',
        answer: 'yes'
      }
    ]
  },
  {
    category: 'animals',
    questions: [
      {
        question: 'inspires a popular song which asks what this animal sounds like',
        answer: 'fox'
      },
      {
        question: 'architect of species',
        answer: 'beaver'
      },
      {
        question: 'flying rat',
        answer: 'pigeon'
      }
    ]
  },
];

function App() {
  // const [ {currentPoints}, setCurrentPoints ] = useState({currentPoints: 100});
  const [{ currentPoints, round }, dispatch] = useReducer(reducer, { currentPoints: 0, round: 1 });
  const [questionClicked, setQuestionClicked] = useState(false);
  //make function for if points box clicked, transistions to question (question can be overlayed over board)

  return (
    <div className="App">
      <Board questionBank={questionBank} currentPoints={currentPoints} round={round} />
      {questionClicked && <Question currentPoints={currentPoints} round={round}/>}
      <Footer currentPoints={currentPoints}/>
    </div>
  );
}

export default App;
