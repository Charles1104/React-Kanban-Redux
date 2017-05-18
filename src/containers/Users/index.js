import React from 'react';
import { signup } from '../../actions';
import { connect } from 'react-redux';

class Register extends React.Component {
  constructor(props){
    super(props);

    componentWillMount(){
      this.props.loadCards();
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
    users: state.users.users
    role: state.users.role
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: users => {
      dispatch(loadUsers(users))
    },
  }
}

const UsersForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default UsersForm;