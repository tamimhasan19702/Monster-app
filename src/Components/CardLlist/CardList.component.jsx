import React from 'react';
import './cardList.style.css';
import CardComponent from '../Card/CardComponent';

function CardList(Props) {
  return (
    <div className='card-list'>
      {Props.monsters.map(monster => (
        <CardComponent key={monster.id} monster={monster}/>
      ))}
    </div>
  )
}

export default CardList
