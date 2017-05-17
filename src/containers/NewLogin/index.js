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

  handleSubmit(event) {
    event.preventDefault();
    this.props.signin(this.state)
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
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signin: (body) => {
      dispatch(signin(body))
    }
  }
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLogin);

export default LoginForm;