import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <Link to="/" class="btn-area"> Home </Link>
        <Link to="/userProfile" class="btn-area"> User Profile </Link>
        <Link to="/debits" class="btn-area"> Debits </Link>
        <Link to="/credits" class="btn-area"> Credits </Link>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <p></p>
            <label htmlFor="password">Password </label>
            <input type="password" name="password" />
          </div>
          <p></p>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn