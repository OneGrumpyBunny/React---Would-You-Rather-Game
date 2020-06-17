import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import PollList from './PollList'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'
import IdentifyUser from './IdentifyUser'
import Nav from './Nav'
import PollDetails from './PollDetails'
import Error404 from "./Error404"

class Dashboard extends Component { 
  render(){
    const { isLoggedIn } = this.props
    return (
      <BrowserRouter>
        <Fragment>
        {!isLoggedIn 
            ? <Route path="/" component={LoginForm} /> 
            : <div>
                <IdentifyUser/>          
                <Nav/>
                <div className="dashboard">
                  <Switch>
                    <Route path='/' exact component={PollList} /> 
                      <Route path='/responses' component={PollList}/>
                      <Route path='/leaderboard' component={Leaderboard} />
                      <Route path='/add' component={NewPoll} />
                      <Route path='/questions/:id' component={PollDetails}/>
                      <Route path="/error404" component={Error404} />
                      <Route component={Error404} />
                  </Switch>    
                </div>
            </div>
        }
        </Fragment>
      </BrowserRouter>
    )   
  }
}
    
function mapStateToProps( {authedUser, questions }) {
    return{
      loading: authedUser === null,
      isLoggedIn: authedUser !== null
    }
  }

export default connect(mapStateToProps)(Dashboard);