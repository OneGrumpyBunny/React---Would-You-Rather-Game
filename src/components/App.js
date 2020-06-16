import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import LoginForm from './LoginForm'

class App extends Component {
  componentDidMount (){
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { isLoggedIn } = this.props
    
    return (
      <Router>
        <Fragment>
        <LoadingBar/>
        <div className="container">
        
          {!isLoggedIn 
          ? <LoginForm/>/*<Route path='/login' component={LoginForm}/> */
          : <Dashboard/>          
          }
        </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps( {authedUser }) {
  return{
    loading: authedUser === null,
    isLoggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
