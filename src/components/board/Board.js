import React, { useReducer } from 'react';
import './Board.css'

function reducer (state, action) {

}

export default function Board(props) {
  const [ money, dispatch ] = useReducer(reducer, 0);
  const [ round, dispatch ] = useReducer(reducer, 1);
  //make function to count the # of questions left - if = 0 then go next round 
  function questionsLeft () {
    
  }
  //want to useReducer to set value of points based on each round
  //if round === 1, points = 100, === 2, = 200, === 3, = 300
  
  //board component sets state for round 

  return (
    <li className="grid-container">
      
    </li>
  )
}
