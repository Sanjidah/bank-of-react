import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    return (
        <div>
            <h1> Credits </h1>
            {creditsView()}
            <Link to="/" class="btn-area"> Home </Link>
            <Link to="/logIn" class="btn-area"> Log In  </Link>
            <Link to="/userProfile" class="btn-area"> User Profile </Link>
            <Link to="/debits" class="btn-area"> Debits </Link>
        </div>
    )
}

export default Credits;