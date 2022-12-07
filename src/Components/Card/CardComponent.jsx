import React from 'react';
import './card.style.css';

function CardComponent(Props) {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${Props.monster.id}set=set1&size=180*180`} alt="monster" />
      <h2>{Props.monster.name}</h2>
      <p>{Props.monster.email}</p>
    </div>
  )
}

export default CardComponent;
