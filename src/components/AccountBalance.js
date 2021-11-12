import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div style={{fontSize:'20px', fontFamily:'Baskerville'}}>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;
