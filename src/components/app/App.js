import './App.css';
import React, { useReducer, useState } from 'react';
import Question from '../question';
import reducer from '../reducer';

//create object - 6 categories with 2 questions each 
function App() {
  // const [ {currentPoints}, setCurrentPoints ] = useState({currentPoints: 100});
  const [ { currentPoints, round }, dispatch ] = useReducer(reducer, { currentPoints: 0, round: 1 });
  // const [{round}, dispatch] = useReducer(reducer, {round: 1})

  console.log('curr points initial', currentPoints)
  return (
    <div className="App">
      <Question currentPoints={currentPoints} round={round}/>
    </div>
  );
}

export default App;
