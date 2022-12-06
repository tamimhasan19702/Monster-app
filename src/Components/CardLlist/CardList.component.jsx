import React from 'react';
import './cardList.style.css';

function CardList(Props) {
  return (
    <div className='card-list'>
      {Props.children}
    </div>
  )
}

export default CardList
