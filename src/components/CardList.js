import React from 'react';
import Card from './Card.js'

const CardList = ({ cards }) => (
  <ul>
    {
      cards.map( ({_id, name, priority}) =>
      <Card
        key={_id}
        name={name}
        priority={priority}
        />
      )
    }
  </ul>
);

export default CardList;