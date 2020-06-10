import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import PollList from './PollList'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'
import Nav from './Nav'
import Login from './Login'

class App extends Component {
  componentDidMount (){
    this.props.dispatch(handleInitialData())
  }
  
  render() {
   
    return (
      <Router>
        <Fragment>
        <LoadingBar/>
        <div className="container">
          <Login/>          
          <Nav/>
          <div className="dashboard">
          {this.props.loading === true
          ? null
          : <div>
            <Route path='/' exact component={PollList} /> 
            <Route path='/responses/' component={PollList}/>
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/new' component={NewPoll} />
            </div>}
            </div>
        </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps( {authedUser }) {
  return{
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);  // connect()() is how we have access to dispatch
