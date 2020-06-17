
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/polls'

class Unanswered extends Component {
    
  /*
  toDetails = (e, id) => {
    const { history } = this.props
    e.preventDefault()

    history.push(`/questions/${id}`)
  }*/

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
                <p>{optionOne.text}<br/><br/>
                <Link className="pollBtn" value="pollBtn" to={`/questions/${id}`}>Vote Now!</Link>
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