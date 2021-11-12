import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/9108/bank-clipart-md.png" alt="bank" style={{marginTop:"30px", height:"auto", width:"400px"}}/>
          <h1 style={{fontFamily:'Baskerville'}}>Bank of React</h1>

          <Link to="/logIn" class="btn-area"> Log In  </Link>
          <Link to="/userProfile" class="btn-area"> User Profile </Link>
          <Link to="/debits" class="btn-area"> Debits </Link>
          <Link to="/credits" class="btn-area"> Credits </Link>
          
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
    );
  }
}

export default Home;