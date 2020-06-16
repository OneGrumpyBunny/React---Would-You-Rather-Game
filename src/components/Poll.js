
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { withRouter } from 'react-router-dom'
import Answered from './Answered'
import Unanswered from './Unanswered'

class Poll extends Component {

  render() {
    const { location, poll } = this.props      
    const { hasVoted1, hasVoted2, id } = poll
    
    if (poll === null) {
      return <p>No polls returned</p>
    }
    
    return (
       <Fragment>              
              {location.pathname === '/' 
              ? (hasVoted1 === false && hasVoted2 === false) && (
                <Unanswered id={id}/>)
              : (hasVoted1 === true || hasVoted2 === true) && (
                <Answered id={id}/>)
              }                
        </Fragment>
    )
  }
}
function mapStateToProps ({authedUser, users, questions}, { id }) {
  const poll = questions[id]
  
  return {
    authedUser,
    poll: poll
      ? formatPoll(poll, users[poll.author], authedUser)
      : null
  }
}
export default withRouter(connect(mapStateToProps)(Poll))
