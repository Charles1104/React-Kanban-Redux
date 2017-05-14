import React from 'react';
import Card from './Card.js'

const CardListQueue = ({ cards }) => (
  <div className="list">
    <h2>QUEUE</h2>
    { cards
      .map( card => <Card card={card} key={card.id}> </Card> )
    }
  </div>
);

export default CardListQueue;