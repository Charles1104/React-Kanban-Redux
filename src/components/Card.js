import React from 'react';

const Card = ({name, priority}) => (
  <li>
    <h3>{ name }</h3>
    <p>{ priority }</p>
  </li>
  );

export default Card