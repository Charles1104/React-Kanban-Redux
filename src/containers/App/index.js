import React, { Component } from 'react';
import { connect } from 'react-redux';
import KanbanMap from '../../components/KanbanMap';
import NewCardForm from '../NewCardForm';
import { addCardToFakeXHR, getCardsFromFakeXHR } from '../../lib/cards.db';
import { loadCards, addCard } from '../../actions';

import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props){
    // give props to your parents
    super(props);
    // do your shit after parent is done doing their shit

    this.name = 'Card List App';

  }

  // life cycle hook
  // before rendering this component
  componentWillMount(){
    getCardsFromFakeXHR()
      .then( cards => {
        this.props.loadCards( cards );
        // this.setState({ books });
      });
  }

  addCard = ( card ) => {
    this.props.addCard( card );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NewCardForm addCard={this.addCard} />
        <KanbanMap cards={this.props.cards} />
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
    },
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;