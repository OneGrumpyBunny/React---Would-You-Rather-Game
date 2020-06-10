/* Child componenet - To render individual polls */
import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { Link, withRouter } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa/index'

class Poll extends Component {
    
  render() {
      
    const { poll, location } = this.props

    if (poll === null) {
      return <p>No polls returned</p>
    }
    const {  optionOne, optionTwo, hasVoted1, hasVoted2 } = poll
    
    return (
        <Fragment>
            {location.pathname === '/' ? 
            (hasVoted1 === false && hasVoted2 === false) && (            
                <div><div className="poll">
                    <p>{optionOne.text}</p>
                    <p>{optionTwo.text}</p>
                </div>      
                <div className="pollYN">
                    <button className="pollBtn">Select this Option!</button>
                    <button className="pollBtn">Select this Option!</button>
                </div>
                <hr/>
                </div>
            )
            :
            (hasVoted1 === true || hasVoted2 === true) && (            
                <div><div className="poll">
                    <p>{optionOne.text}</p>
                    <p>{optionTwo.text}</p>
                </div>      
                <div className="pollYN">
                    <p>Yes {hasVoted1 === true && <FaCheck color="Green"/>}</p>
                    <p>No {hasVoted2 === true && <FaCheck color="Green"/>}</p>
                </div>
                <hr/>
                </div>
            )}
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