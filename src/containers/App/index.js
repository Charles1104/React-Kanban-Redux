import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanMap from '../../components/KanbanMap';
import NewCardForm from '../NewCardForm';
import NewLogin from '../NewLogin';
import Register from '../Register';
import { loadCards, signout, remove, move } from '../../actions';

import './styles.css';

class App extends Component {
  constructor(props){
    super(props);

    this.del= this.del.bind(this);
    this.moveRight= this.moveRight.bind(this);
    this.moveLeft= this.moveLeft.bind(this);
  }

  componentWillMount(){
    this.props.loadCards();
  }

  del(id){
    let cardArray = this.props.cards.slice(0);
    let cardToDelete = null;
    for(var i=0; i < cardArray.length; i++){
      if(cardArray[i].id === id){
      cardToDelete = cardArray[i];
      cardArray.splice(i,1);
      break;
      }
    }
    this.props.remove(cardToDelete)
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
    this.props.move(cardToUpdate)
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
    this.props.move(cardToUpdate)
  }

  render() {
    if(this.props.login){
      return (
        <div className="App">
          <h1>KANBAN - CARDS</h1>
          <div className="LogHeader">
            <p>You are logged in as {this.props.username}</p>
            <input className="logout" type="button" onClick={this.props.signout} value="Log out"/>
          </div>
          <NewCardForm />
          <KanbanMap cards={this.props.cards} right={this.moveRight} left={this.moveLeft} del={this.del}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>KANBAN - CARDS</h1>
          <div className="NotLogged">
            <NewLogin />
            <Register />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards,
    username: state.users.username,
    login: state.users.loggedIn
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    signout: () => {
      dispatch(signout())
    },
    move: card => {
      dispatch(move(card))
    },
    remove: card => {
      dispatch(remove(card))
    },
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;