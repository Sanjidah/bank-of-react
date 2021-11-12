import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div style={{fontSize:'20px', fontFamily:'Baskerville'}}>
          Balance: ${(Math.round(this.props.accountBalance* 100) / 100).toFixed(2)}
        </div>
    );
  }
}

export default AccountBalance;
