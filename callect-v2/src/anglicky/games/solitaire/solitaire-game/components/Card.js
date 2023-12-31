import React from 'react';
import '../styles/Game.css';

const Card = (props) => {

  const src = props.src;
  let isStockpile = props.isStockpile;
  if (isStockpile === null) isStockpile = false;

  return (
    <div
      className={[isStockpile ? 'stockpile-card-container' : 'card-container']}
    >
      <img
        id='Card'
        alt='card'
        draggable='false'
        className={isStockpile ? 'stockpile-card' : 'card-1'}
        src={src}
      />
    </div>
  );
};

export default Card;