import React, { Component } from 'react';
import { signin } from '../../actions';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username : event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password : event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("/api/users",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
    .then( data => {
      data.json()
        .then(data => {
            localStorage.setItem('logged', true);
            localStorage.setItem('username', this.state.username);
            this.props.signin();
        })
    })
  }

  render(){
    return (
      <div >
        <form className="registerPanel" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username} />
          <input type="password" placeholder="password " onChange={this.handlePasswordChange} value={this.state.password} />
          <button className="buttonL" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signin: () => {
      dispatch(signin())
    }
  }
}

const RegisterForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterForm;