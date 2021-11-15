import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Debits = (props) => {      
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0, 10);
      return (
        <ol key={debit.id}>
          <div>
            <h3>{debit.description}</h3>
            <p> <a> Price: ${debit.amount}</a>
                <a> Date: {date} </a>
            </p>
          </div>
        </ol>
      );
    });
  };


  
  return (
    <div>
      <h1>
        {" "}
        <u>Debits </u>
      </h1>

      <Link to="/" class="btn-area"> Home </Link>
      <Link to="/logIn" class="btn-area"> Log In  </Link>
      <Link to="/userProfile" class="btn-area"> User Profile </Link>
      <Link to="/credits" class="btn-area"> Credits </Link>
      <AccountBalance accountBalance={props.accountBalance}/>      
      
      <form onSubmit={props.addDebit}>
        <p></p>
        <label htmlFor="description"> Enter description here: </label>
        <input type="text" name="description" />
        <p></p>
        <label htmlFor="amount"> Enter amount here: </label>
        <input type="number" name="amount" step="0.01"/>
        <p></p>
        <label htmlFor="submit"> Click to submit new debit: </label>
        <button type="submit">Add Debit</button>
      </form>
      {debitsView()}
    </div>
  )
}

export default Debits;
