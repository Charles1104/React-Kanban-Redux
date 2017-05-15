import React from 'react';
import Card from './Card.js'

const CardListDone = ({ cards, changeL, del }) => (
  <div className="list">
    <h2>DONE</h2>
    { cards
      .map( card => <Card card={card} key={card.id} del={del}>
      <input className="buttonL" type="button" onClick={ () => changeL(card.id)} value="Move left"/>
      </Card> )
    }
  </div>
);

export default CardListDone;