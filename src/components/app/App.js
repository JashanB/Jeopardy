import './App.css';
import { useReducer } from 'react';

function reducer (state, action) {

}
//create object - 6 categories with 2 questions each 
function App() {
  const [ money, dispatch ] = useReducer(reducer, 0)
  const [ round, dispatch ] = useReducer(reducer, 1)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
