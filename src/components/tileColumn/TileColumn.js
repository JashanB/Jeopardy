import React, { useReducer, useState } from 'react';
import './TileColumn.css'
import Tile from '../tile';


function TileColumn(props) {
  //if index 0 for tile - want to display category name
  //if index = 1 for tile, want to display points representing
  const baseAmount = props.round * 100;
  const categoryTile = <Tile
    key={props.categoryName + 'Display'} 
    display={props.categoryName}
    clickable={false}
    handleTileClick={props.handleTileClick}
  />
  const displayTiles = props.tiles.map(function(tile, index) {
    const displayValue = baseAmount * (index + 1);
    return (
      <Tile 
        key={tile.key}
        question={tile.question}
        answer={tile.answer}
        display={displayValue}
        clickable={true}
        handleTileClick={props.handleTileClick}
      />
    )
  })

  return (
    <div className="tile-column">
      {categoryTile}
      {displayTiles}
    </div>
  )
}

export default TileColumn = React.memo(TileColumn);