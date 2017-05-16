import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanMap from '../../components/KanbanMap';
import NewCardForm from '../NewCardForm';
import NewLogin from '../NewLogin';
import Register from '../Register';
import { getCardsFromFakeXHR } from '../../lib/cards.db';
import { loadCards, signout } from '../../actions';

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
    this.fetchLogout= this.fetchLogout.bind(this);
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
    .then(() => getCardsFromFakeXHR()
      .then( cards => {
          this.props.loadCards( cards );
      })
    );
  }

  fetchLogout (){
    fetch('/api/logout')
    .then(() => {
      localStorage.clear();
      this.props.signout();
    })
  }

  render() {
    if(this.props.login.loggedIn){
      return (
        <div className="App">
          <h1>KANBAN - CARDS</h1>
          <div className="LogHeader">
            <p>You are logged in as {this.props.login.username}</p>
            <input className="logout" type="button" onClick={ this.fetchLogout } value="Log out"/>
          </div>
          <NewCardForm />
          <KanbanMap cards={this.props.cards} right={this.moveRight} left={this.moveLeft} del={this.del}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>KANBAN - CARDS</h1>
          <NewLogin />
          <Register />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    login: state.login
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    signout: () => {
      dispatch(signout())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;