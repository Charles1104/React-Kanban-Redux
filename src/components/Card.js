import React from 'react';

const Card = ({card}) => (

  <div className= {card.status} >
    <div className= "text">
      <div className= "headerTag">
        <h3>{ card.name }</h3>
      </div>
      <p> <span>Priority:</span> { card.priority }</p>
      <p> <span>Assigned to:</span> { card.Assignor.username}</p>
      <p> <span>Created by:</span> { card.Creator.username }</p>
      <p> <span>Priority:</span> { card.priority }</p>
      <p> <span>Created at:</span> { card.createdAt.slice(0,10).concat(' | ', card.createdAt.slice(11,16)) }</p>
    </div>
  </div>
  );

export default Card

