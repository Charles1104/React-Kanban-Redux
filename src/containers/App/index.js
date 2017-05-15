import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanMap from '../../components/KanbanMap';
import NewCardForm from '../NewCardForm';
import NewLogin from '../NewLogin';
import { getCardsFromFakeXHR } from '../../lib/cards.db';
import { loadCards } from '../../actions';

import './styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.name = 'Card List App';

    this.fetchMove= this.fetchMove.bind(this);
    this.fetchDel= this.fetchDel.bind(this);
    this.moveRight= this.moveRight.bind(this);
    this.moveLeft= this.moveLeft.bind(this);
    this.del= this.del.bind(this);
  }

  componentWillMount(){
    getCardsFromFakeXHR()
      .then( cards => {
        this.props.loadCards( cards );
      });
  }

  del(id){
    let cardArray = this.props.cards.slice(0);
    let cardToDelete = null;
    for(var i=0; i < cardArray.length; i++){
      if(cardArray[i].id === id){
      cardToDelete = cardArray[i].id;
      cardArray.splice(i,1);
      break;
      }
    }
    this.fetchDel(`/api/cards/${cardToDelete}`)
  }

  fetchDel(path){
    fetch(path,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
    })
    .then(function(res){ return res.json(); })
    .then(() => getCardsFromFakeXHR()
      .then( cards => {
        this.props.loadCards( cards );
      })
    );
  }

  moveRight(id){
    let cardArray = this.props.cards.slice(0);
    let cardToUpdate = null;
    for(var i=0; i < cardArray.length; i++){
      if(cardArray[i].id === id){
        if(cardArray[i].status === "Queue"){
          cardArray[i].status = "Progress";
        } else{
          cardArray[i].status = "Done";
        }
        cardToUpdate = cardArray[i];
        console.log(cardToUpdate);
        break;
      }
    }
    this.fetchMove(`/api/cards/${cardToUpdate.id}`, cardArray, cardToUpdate)
  }

  moveLeft(id){
    let cardArray = this.props.cards.slice(0);
    let cardToUpdate = null;
    for(var i=0; i < cardArray.length; i++){
      if(cardArray[i].id === id){
        if(cardArray[i].status === "Done"){
          cardArray[i].status = "Progress";
        } else{
          cardArray[i].status = "Queue";
        }
        cardToUpdate = cardArray[i];
        break;
      }
    }
    this.fetchMove(`/api/cards/${cardToUpdate.id}`, cardArray, cardToUpdate)
  }

  fetchMove(path, cardArray, cardToUpdate){
    fetch(path,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({"status":cardToUpdate.status})
    })
    .then(function(res){ return res.json(); })
    .then(() => getCardsFromFakeXHR()
      .then( cards => {
          this.props.loadCards( cards );
      })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>KANBAN - CARDS</h1>
        <NewLogin />
        <NewCardForm />
        <KanbanMap cards={this.props.cards} right={this.moveRight} left={this.moveLeft} del={this.del}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;