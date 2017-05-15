import React from 'react';
import Card from './Card.js'

const CardListProgress = ({ cards, changeL, changeR, del }) => (
  <div className="list">
    <h2>PROGRESS</h2>
    { cards
      .map( card => <Card card={card} key={card.id} del={del}>
       <input className="buttonL" type="button" onClick={() => changeL(card.id)} value="Move left"/>
       <input className="buttonR" type="button" onClick={() => changeR(card.id)} value="Move right"/>
       </Card> )
    }
  </div>
);

export default CardListProgress;