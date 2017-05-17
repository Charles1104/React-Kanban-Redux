import React from 'react';
import { signup } from '../../actions';
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
    this.state.role= "U";
    this.props.signup(this.state);
  }

  render(){
    return (
      <div >
        <form className="loginPanel" onSubmit={this.handleSubmit}>
          <div className="registerInput">
            <input type="text" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username} />
            <input type="password" placeholder="password " onChange={this.handlePasswordChange} value={this.state.password} />
          </div>
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
    signup: (body) => {
      dispatch(signup(body))
    }
  }
}

const RegisterForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default RegisterForm;