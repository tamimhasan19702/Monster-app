import React from 'react';
import './cardList.style.css';

function CardList(Props) {
  return (
    <div className='card-list'>
      {Props.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
      ))}
    </div>
  )
}

export default CardList
