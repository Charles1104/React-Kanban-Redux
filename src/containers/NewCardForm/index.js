import React, { Component } from 'react';

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name : '',
      priority : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();

    this.props.addCard(this.state);

    this.setState({ name : '', priority : '' });

  }

  handleChangeName(event){
    this.setState({
      name : event.target.value
    });
  }

  handleChangePriority(event){
    this.setState({
      priority : event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeName} />
        </div>
        <div>
          <input type="text" placeholder="Priority" value={this.state.priority} onChange={this.handleChangePriority} />
        </div>
        <div>
          <button type="submit">Add Card</button>
        </div>
      </form>
    );
  }
}

export default NewCardForm;