import React from 'react';
import { loadUsers, removeU } from '../../actions';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import User from '../../components/User';

class Users extends React.Component {
  constructor(props){
    super(props);

    this.del= this.del.bind(this);
  }


  componentWillMount(){
    this.props.loadUsers();
  }

  del(username){
    let userArray = this.props.users.slice(0);
    let userToDelete = null;
    for(var i=0; i < userArray.length; i++){
      if(userArray[i].username === username){
      userToDelete = userArray[i];
      userArray.splice(i,1);
      break;
      }
    }
    this.props.removeU(userToDelete);
  }


  render(){
    return (
      <div className="listUser" >
        <h1>List of Users</h1>
        <Link to="/"> <img className="home" alt="HomePage" src="/images/home.png"/></Link>
        { this.props.users
            .map( user => <User user={user} key={user.username} >
              {this.props.role === "A" &&
              <input className="delUser" type="button" onClick={() => this.del(user.username)} value="Remove"/>
              }

              </User> )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    role: state.users.role
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadUsers: users => {
      dispatch(loadUsers(users))
    },
    removeU: user => {
      dispatch(removeU(user))
    },
  }
}

const connectedUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default connectedUsers;