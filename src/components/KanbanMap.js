import React from 'react';
import CardListQueue from './CardListQueue.js'
import CardListProgress from './CardListProgress.js'
import CardListDone from './CardListDone.js'


const KanbanMap = ({ cards }) => (
  <div className="mainPanel">
    <CardListQueue cards={cards.filter(card => card.status === 'Queue')} />
    <CardListProgress cards={cards.filter(card => card.status === 'Progress')} />
    <CardListDone cards={cards.filter(card => card.status === 'Done')} />
  </div>
);

export default KanbanMap;