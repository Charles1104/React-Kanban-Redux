import React from 'react';
import Card from './Card.js'

const CardListProgress = ({ cards }) => (
  <div className="list">
    <h2>PROGRESS</h2>
    { cards
      .map( card => <Card card={card} > </Card> )
    }
  </div>
);

export default CardListProgress;