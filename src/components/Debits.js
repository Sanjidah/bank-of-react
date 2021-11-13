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
      <h1> Debits </h1>
      {debitsView()}
    </div>
  );
};

export default Debits;
