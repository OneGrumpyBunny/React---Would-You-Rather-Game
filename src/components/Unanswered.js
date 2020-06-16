
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/polls'

class Unanswered extends Component {
    
  toDetails = (e, id) => {
    const { history } = this.props
    console.log("You are in Unanswered toDetails function")
    e.preventDefault()

    history.push(`/questions/${id}`)
    return <Redirect to={`/questions/${id}`}/>
  }

  handleAnswer = (e) => {
    e.preventDefault()    
    const { dispatch, poll, authedUser } = this.props
    
    dispatch(handleSaveAnswer({
      authedUser,
      qid: poll.id,
      answer: e.target.value,
    }))    
  }
    
  render() {
      
    const { poll } = this.props
    const { id, avatar, name, optionOne  } = poll

    if (poll === null) {
      return <p>No polls returned</p>
    }
        
    return (
        
        <div className="pollContainer">                       
            <div className="poll">
                <p>{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
                <p>{optionOne.text}<br/>
                <button className="pollBtn" value="pollBtn" onClick={(e) => this.toDetails(e, id)}>Vote Now!</button>
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
export default withRouter(connect(mapStateToProps)(Unanswered));