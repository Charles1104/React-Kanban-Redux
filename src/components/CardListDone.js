import React from 'react';
import Card from './Card.js'

const CardListDone = ({ cards }) => (
  <div className="list">
    <h2>DONE</h2>
    { cards
      .map( card => <Card card={card} > </Card> )
    }
  </div>
);

export default CardListDone;