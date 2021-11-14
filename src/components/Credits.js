import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>
                <h3>{credit.description}</h3>
                <p>
                 <a>Price: ${credit.amount} </a>
                 <a>Date: {date}</a>
                </p>
                </li>
        })
    }
    return (
        <div>
            <h1> Credits </h1>
            <Link to="/" class="btn-area"> Home </Link>
            <Link to="/logIn" class="btn-area"> Log In  </Link>
            <Link to="/userProfile" class="btn-area"> User Profile </Link>
            <Link to="/debits" class="btn-area"> Debits </Link>
            <AccountBalance accountBalance={props.accountBalance}/>
        <form onSubmit={props.addCredit}>
            <p>Enter description here:</p>
            <input type="text" name="description" />
            <p>Enter amount here:</p>
            <input type="number" name="amount" />
            <p>Click to submit new credit</p>
            <button type="submit">Add Credit</button>
        </form>
            {creditsView()}
        </div>
    )
}

export default Credits;
