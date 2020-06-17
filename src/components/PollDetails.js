
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa/index'
import { formatPoll } from '../data/helpers'
import { handleSaveAnswer } from '../actions/polls'

class PollDetails extends Component {
    
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
    
    if (!poll) {
        return <Redirect to='/error404' />
    }
      
    const { hasVoted1, hasVoted2, optionOne, optionTwo, id, percentVotes1, percentVotes2, avatar, name } = poll
    
        return(
            <div className="pollsList">
            <h3><em>Would you rather...</em></h3>
                <div className="pollContainer">
                <p className="zeroMargin">{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>

                    { !hasVoted1 && !hasVoted2 
                    ? <Fragment>                        
                        <div className="pollDetail">
                            <p>{optionOne.text}</p>
                            <p>{optionTwo.text}</p>
                        </div>  
                        <div className="pollDetail">
                            <p><button className="voteBtn" value="optionOne" onClick={this.handleAnswer}>Select this Option!</button></p>
                            <p><button className="voteBtn"value="optionTwo" onClick={this.handleAnswer}>Select this Option!</button></p>
                        </div>
                    </Fragment>
                    : <Fragment>
                        <div className="pollDetail">
                            <p>{optionOne.text} {hasVoted1 === true && <FaCheck color="Green"/>}</p>
                            <p>{optionTwo.text} {hasVoted2 === true && <FaCheck color="Green"/>}</p>
                        </div>  
                        <div className="pollDetail">
                            <p><span className="details">{optionOne.votes.length} {optionOne.votes.length === 1 ? `vote` : `votes`} ({percentVotes1}%)</span></p>
                            <p><span className="details">{optionTwo.votes.length} {optionTwo.votes.length === 1 ? `vote` : `votes`} ({percentVotes2}%)</span></p>
                        </div>
                    </Fragment>
                    }
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const poll = questions[id]
    
    return {
        authedUser,
        poll: poll
      ? formatPoll(poll, users[poll.author], authedUser)
      : null     
    }
  }
  export default withRouter(connect(mapStateToProps)(PollDetails))
        