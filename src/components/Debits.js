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
      {debitsView()}
      <form onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  );
};

export default Debits;
