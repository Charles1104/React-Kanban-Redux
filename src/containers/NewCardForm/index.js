import React, { Component } from 'react';
import { addCard } from '../../actions';
import { connect } from 'react-redux';

class NewCardForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: "",
      name: "",
      priority: "",
      assigned_to: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCard(this.state);
    this.reset();
  }

  reset(){
    this.setState({
      id: "",
      name: "",
      priority: "",
      assigned_to: ""
    })
  }

  handleNameChange(event) {
    this.setState({ name : event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority : event.target.value });
  }

  handleAssignedToChange(event) {
    this.setState({ assigned_to : event.target.value });
  }

  render(){
    return (
      <div >
        <form className="addPanel" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" onChange={this.handleNameChange} value={this.state.name} />
          <select onChange={this.handlePriorityChange}>
            <option defaultValue>Priority</option>
            <option value="Low">Low</option>
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>
          <input type="text" placeholder="assigned_to" onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
          <button className="buttonL" type="submit">Add Card</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCard: card => {
      dispatch(addCard(card))
    }
  }
}

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedForm;