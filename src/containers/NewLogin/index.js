import React from 'react';
import { signin } from '../../actions';
import { connect } from 'react-redux';

class NewLogin extends React.Component {
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

  logg(){
    this.props.signin();
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("/api/login",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(this.state)
    })
    .then( data => {
      data.json()
        .then(data => {
          if(data.success === true){
            localStorage.setItem('logged', true);
            localStorage.setItem('username', this.state.username);
            this.logg();
          }
        })
    })
  }

  render(){
    return (
      <div >
        <form className="loginPanel" onSubmit={this.handleSubmit}>
          <div className="loginInput">
            <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username} />
            <input type="password" placeholder="password " onChange={this.handlePasswordChange} value={this.state.password} />
          </div>
          <button className="buttonL" type="submit">Log In</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.users.loggedIn
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signin: () => {
      dispatch(signin())
    }
  }
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLogin);

export default LoginForm;