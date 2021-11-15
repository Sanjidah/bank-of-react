import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1><u>User Profile</u></h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <Link to="/" class="btn-area"> Home </Link>
          <Link to="/logIn" class="btn-area"> Log In  </Link>
          <Link to="/debits" class="btn-area"> Debits </Link>
          <Link to="/credits" class="btn-area"> Credits </Link>
          
        </div>
    );
  }
}

export default UserProfile;