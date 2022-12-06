import React from 'react';
import './card.style.css';

function CardComponent(Props) {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${Props.monster.id}set=set1&size=180*180`} alt="monster" />
      <h1>{Props.monster.name}</h1>
    </div>
  )
}

export default CardComponent;
