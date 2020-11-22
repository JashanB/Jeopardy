import './App.css';
import Question from '../question';
import Board from '../board';
import Footer from '../footer';
import useApplicationData from "../../hooks/useApplicationData";

//create object - 6 categories with 2 questions each 
const questionBank = [
  {
    category: 'FAIRY TALES',
    key: 'cat1',
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
    category: 'VEGETABLES',
    key: 'cat2',
    round1: [
      {
        key: 'r1c2q1',
        question: 'This green vegetable is used to make pickles.',
        answer: 'Cucumber'
      },
      {
        key: 'r1c2q2',
        question: 'This vegetable grows on vines and its name is often used to describe something you might do to a bug',
        answer: 'Squash'
      },
      {
        key: 'r1c2q3',
        question: 'This vegetable is also a letter of the alphabet.',
        answer: 'Pea'
      },
      {
        key: 'r1c2q4',
        question: 'Popeye gets his strength from this vegetable.',
        answer: 'Spinach'
      }
    ],
    round2: [
      {
        key: 'r2c2q1',
        question: 'Bugs Bunny\'s favourite food.',
        answer: 'Carrot'
      },
      {
        key: 'r2c2q2',
        question: 'This vegetable grows on vines and its name is often used to describe something you might do to a bug.',
        answer: 'Squash'
      },
      {
        key: 'r2c2q3',
        question: 'Maize is another name for this vegetable.',
        answer: 'Corn'
      },
      {
        key: 'r2c2q4',
        question: 'When you eat this green vegetable, you\'re actually eating the flower.',
        answer: 'Broccoli'
      }
    ]
  },
  {
    category: 'MUSICAL INSTRUMENTS',
    key: 'cat3',
    round1: [
      {
        key: 'r1c3q1',
        question: 'This string instrument is used as a fiddle in country or bluegrass music.',
        answer: 'Violin'
      },
      {
        key: 'r1c3q2',
        question: 'This woodwind instrument is nearly 8 feet long and has the lowest voice.',
        answer: 'Bassoon'
      },
      {
        key: 'r1c3q3',
        question: 'This brass instrument is the only one to use a slide to change pitches.',
        answer: 'Trombone'
      },
      {
        key: 'r1c3q4',
        question: 'This percussion instrument makes sound when hammers hit strings inside of it.',
        answer: 'Piano'
      }
    ],
    round2: [
      {
        key: 'r2c3q1',
        question: 'When two people are singing it is called this.',
        answer: 'Duet'
      },
      {
        key: 'r2c3q2',
        question: 'The highest man\'s voice is called this.',
        answer: 'Tenor'
      },
      {
        key: 'r2c3q3',
        question: 'The orchestra tunes to this instrument.',
        answer: 'Oboe'
      },
      {
        key: 'r2c3q4',
        question: 'This instrument is played by blowing across the mouthpiece.',
        answer: 'Flute'
      }
    ]
  },
  {
    category: 'SWEETS',
    key: 'cat4',
    round1: [
      {
        key: 'r1c4q1',
        question: 'This chocolate has a slogan of Everyday deserves a kiss.',
        answer: 'Hershey kisses'
      },
      {
        key: 'r1c4q2',
        question: 'This chocolate candy is covered in a hard sugar shell.',
        answer: 'M&Ms'
      },
      {
        key: 'r1c4q3',
        question: 'This popular chocolate and caramel candy came from the United Kingdom.',
        answer: 'Twix'
      },
      {
        key: 'r1c4q4',
        question: 'This lolipop has a chewy brown center.',
        answer: 'Tootsie Pops'
      }
    ],
    round2: [
      {
        key: 'r2c4q1',
        question: 'The slogan for this candy is Taste the Rainbow.',
        answer: 'Skittles'
      },
      {
        key: 'r2c4q2',
        question: 'This kind of mint resembles a bean.',
        answer: 'Tic-Tac'
      },
      {
        key: 'r2c4q3',
        question: 'This candy is made from spun sugar.',
        answer: 'Cotton Candy'
      },
      {
        key: 'r2c4q4',
        question: 'This kind of lickable candy has 18 flavors.',
        answer: 'Jolly Ranchers'
      }
    ]
  }
];

function App() {
  const { 
    state,
    validateAnswer,
    minimizeButton,
    handleTileClick
  } = useApplicationData();

  return (
    <div className="App">
      <Board 
        questionBank={questionBank} 
        handleTileClick={handleTileClick} 
        currentPoints={state.currentPoints} 
        round={state.round} 
      />
      {state.questionClicked && 
        <Question 
          validateAnswer={validateAnswer} 
          minimizeButton={minimizeButton} 
          currentPoints={state.currentPoints} 
          round={state.round} 
          question={state.question} 
          answer={state.answer}
          pointsForQuestion={state.pointsForQuestion}
          questionsRemaining={state.questionsRemaining}
        />}
      <Footer currentPoints={state.currentPoints}/>
    </div>
  );
}

export default App;
