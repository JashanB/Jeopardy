import './App.css';
import { useReducer } from 'react';
import Question from '../question';

function reducer (state, action) {

}
//create object - 6 categories with 2 questions each 
function App() {
  const currentPoints = 500;

  return (
    <div className="App">
      <Question currentPoints={currentPoints}/>
    </div>
  );
}

export default App;
