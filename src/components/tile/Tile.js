import React, { useReducer, useState } from 'react';
import './Tile.css'

function Tile(props) {
    //make on click function for the tile thats not the categroy that dispatches the question and answer for it, and sets tile cliced to true

  return (
    <li className="grid-container">
    </li>
  )
}

export const Tile = React.memo(Tile)