
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { Link, Redirect } from 'react-router-dom'

class Answered extends Component {
    
  render() {
    const { poll } = this.props
    
    if (!poll) {
      return <Redirect to='/error404' />
    }
      
    const { id, avatar, name, optionOne } = poll

    if (poll === null) {
      return <p>No polls returned</p>
    }
    
    return (   
      
        <div className="pollContainer">                      
            <div className="poll">
                <p>{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
                <p>{optionOne.text}<br/><br/>
                   <Link className="pollBtn" to={`/questions/${id}`}>See Details</Link>
                </p>
            </div> 
        </div>
      
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
export default connect(mapStateToProps)(Answered);
