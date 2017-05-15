import React from 'react';
import CardListQueue from './CardListQueue.js'
import CardListProgress from './CardListProgress.js'
import CardListDone from './CardListDone.js'

const KanbanMap = ({ cards, left, right, del }) => (
  <div className="mainPanel">
    <CardListQueue cards={cards.filter(card => card.status === 'Queue')} changeR={right} del={del}/>
    <CardListProgress cards={cards.filter(card => card.status === 'Progress')} changeL={left} changeR={right} del={del}/>
    <CardListDone cards={cards.filter(card => card.status === 'Done')} changeL={left} del={del}/>
  </div>
);

export default KanbanMap;