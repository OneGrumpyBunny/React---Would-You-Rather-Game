
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa/index'
import { formatPoll } from '../data/helpers'

class PollDetails extends Component {
    
    render() {

    const { poll } = this.props   
    
    if (!poll) {
        return <Redirect to='/error404' />
    }
   
    const { hasVoted1, hasVoted2, optionOne, optionTwo, percentVotes1, percentVotes2, avatar, name } = poll
    

        return(
            <div className="pollsList">
            <h3><em>Would you rather...</em></h3>
                <div className="pollContainer">
                    <p>{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
                        <div className="pollDetail">
                            <p>{optionOne.text} {hasVoted1 === true && <FaCheck color="Green"/>}</p>
                            <p>{optionTwo.text} {hasVoted2 === true && <FaCheck color="Green"/>}</p>
                    </div>  
                    <div className="pollDetail">
                        <p><span className="details">{optionOne.votes.length} {optionOne.votes.length === 1 ? `vote` : `votes`} ({percentVotes1}%)</span></p>
                        <p><span className="details">{optionTwo.votes.length} {optionTwo.votes.length === 1 ? `vote` : `votes`} ({percentVotes2}%)</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, props) {
    const { id } = props.match.params
    const poll = questions[id]
    
    return {
        poll: poll
      ? formatPoll(poll, users[poll.author], authedUser)
      : null     
    }
  }
  export default withRouter(connect(mapStateToProps)(PollDetails))
        