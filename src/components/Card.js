import React from 'react';

const Card = (props) => (

  <div className={props.card.status} >
    <div className="text">
      <div className="headerTag">
        <h3>{ props.card.name }</h3>
        <input className="close" type="button" onClick={ () => props.del(props.card.id)} value="x"/>
      </div>
      <p> <span>Priority:</span> { props.card.priority }</p>
      <p> <span>Assigned to:</span> { props.card.assigned_to}</p>
      <p> <span>Created by:</span> { localStorage.username }</p>
      <p> <span>Created at:</span> { props.card.createdAt.slice(0,10).concat(' | ', props.card.createdAt.slice(11,16)) }</p>
    </div>

    <div className="buttons">
      { props.children }
    </div>

  </div>
  );

export default Card

