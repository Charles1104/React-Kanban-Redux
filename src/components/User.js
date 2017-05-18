import React from 'react';

const User = (props) => (
    <div className="user">
      <p> <span>Username:</span> { props.user.username }</p>
      <p> <span>Role:</span> { props.user.role }</p>
      <p> {props.children}</p>
    </div>
  );

export default User