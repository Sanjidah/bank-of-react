import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Debits = (props) => {
  //fuction displays the debits
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0, 10);
      return (
        <ol key={debit.id}>
          <div>
            <h3>{debit.description}</h3>
            <p>
              <a> Price: ${debit.amount}</a>
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
      <form onSubmit={props.addDebit}>
        <p>Enter description here:</p>
        <input type="text" name="description" />
        <p>Enter amount here:</p>
        <input type="number" name="amount" />
        <p>Click to submit new debit</p>
        <button type="submit">Add Debit</button>
      </form>
      {debitsView()}
    </div>
  );
};

export default Debits;
