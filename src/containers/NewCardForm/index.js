import React, { Component } from 'react';

class NewCardForm extends Component {

  constructor(props){
    super(props);

    // set the initial state
    this.state = {
      id: "",
      name: "",
      priority: "",
      created_by : "",
      assigned_to: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addCard(card){
    this.props.addCard(card);

    const name = "";
    const priority = "";
    const created_by = "";
    const assigned_to = "";
    this.setState({
      name,
      priority,
      created_by,
      assigned_to
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.status = "Queue";

    fetch("/api/cards/",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
    .then(() => fetch('/api/cards')).then( res => res.json())
    .then((res) => this.addCard(res));
  }

  handleNameChange(event) {
    this.setState({ name : event.target.value });
  }

  handlePriorityChange(event) {
    this.setState({ priority : event.target.value });
  }

  handleCreatedByChange(event) {
    this.setState({ created_by : event.target.value });
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
          <input type="text" placeholder="created_by " onChange={this.handleCreatedByChange} value={this.state.created_by} />
          <input type="text" placeholder="assigned_to" onChange={this.handleAssignedToChange} value={this.state.assigned_to} />
          <button className="buttonL" type="submit">Add Card</button>
        </form>
      </div>
    )
  }
}

export default NewCardForm;