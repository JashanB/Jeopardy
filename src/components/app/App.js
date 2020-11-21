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
        answer: 'cow'
      }
    ]
  },
  {
    category: 'VEGETABLES',
    round1: [
      {
        key: 'r1c2q1',
        question: 'This green vegetable is used to make pickles.',
        answer: 'cucumber'
      },
      {
        key: 'r1c2q2',
        question: 'This vegetable grows on vines and its name is often used to describe something you might do to a bug',
        answer: 'squash'
      },
      {
        key: 'r1c2q3',
        question: 'This vegetable is also a letter of the alphabet.',
        answer: 'pea'
      },
      {
        key: 'r1c2q4',
        question: 'Popeye gets his strength from this vegetable.',
        answer: 'spinach'
      }
    ],
    round2: [
      {
        key: 'r2c2q1',
        question: 'Bugs Bunny\'s favourite food.',
        answer: 'carrot'
      },
      {
        key: 'r2c2q2',
        question: 'This vegetable grows on vines and its name is often used to describe something you might do to a bug.',
        answer: 'squash'
      },
      {
        key: 'r2c2q3',
        question: 'Maize is another name for this vegetable.',
        answer: 'corn'
      },
      {
        key: 'r2c2q4',
        question: 'When you eat this green vegetable, you\'re actually eating the flower.',
        answer: 'broccoli'
      }
    ]
  },
  {
    category: 'MUSICAL INSTRUMENTS',
    round1: [
      {
        key: 'r1c3q1',
        question: 'This string instrument is used as a fiddle in country or bluegrass music.',
        answer: 'violin'
      },
      {
        key: 'r1c3q2',
        question: 'This woodwind instrument is nearly 8 feet long and has the lowest voice.',
        answer: 'bassoon'
      },
      {
        key: 'r1c3q3',
        question: 'This brass instrument is the only one to use a slide to change pitches.',
        answer: 'trombone'
      },
      {
        key: 'r1c3q4',
        question: 'This percussion instrument makes sound when hammers hit strings inside of it.',
        answer: 'piano'
      }
    ],
    round2: [
      {
        key: 'r2c3q1',
        question: 'When two people are singing it is called this.',
        answer: 'duet'
      },
      {
        key: 'r2c3q2',
        question: 'The highest man\'s voice is called this.',
        answer: 'tenor'
      },
      {
        key: 'r2c3q3',
        question: 'The orchestra tunes to this instrument.',
        answer: 'oboe'
      },
      {
        key: 'r2c3q4',
        question: 'This instrument is played by blowing across the mouthpiece.',
        answer: 'flute'
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
