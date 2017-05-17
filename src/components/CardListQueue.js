import React from 'react';
import Card from './Card.js'

const CardListQueue = ({ cards, changeR, del }) => (
  <div className="list">
    <div className="columnHeader">
      <h2>QUEUE</h2>
    </div>
    { cards
      .map( card => <Card card={card} key={card.id} del={del}> <input className="buttonR" type="button" onClick={() => changeR(card.id)} value="Move right"/></Card> )
    }
  </div>
);

export default CardListQueue;