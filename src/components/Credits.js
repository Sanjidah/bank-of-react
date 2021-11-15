import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return (
                <ol key={credit.id}>
                    <div> 
                        <h3>{credit.description}</h3>
                        <p> <a> Price: ${credit.amount} </a>
                            <a> Date: {date} </a>
                        </p>
                    </div>
                </ol>
            );
        });
    }
    
    return (
        <div>
            <h1> 
                {" "}
                <u>Credits </u>
            </h1>

            <Link to="/" class="btn-area"> Home </Link>
            <Link to="/logIn" class="btn-area"> Log In  </Link>
            <Link to="/userProfile" class="btn-area"> User Profile </Link>
            <Link to="/debits" class="btn-area"> Debits </Link>
            <AccountBalance accountBalance={props.accountBalance}/>
            
            <form onSubmit={props.addCredit}>
                <p></p>
                <label htmlFor="description"> Enter description here: </label>
                <input type="text" name="description" />
                <p></p>
                <label htmlFor="amount"> Enter amount here: </label>
                <input type="number" name="amount" step="0.01"/>
                <p></p>
                <label htmlFor="submit"> Click to submit new credit: </label>
                <button type="submit">Add Credit</button>
            </form>

            {creditsView()}
        </div>
    )
}

export default Credits;
