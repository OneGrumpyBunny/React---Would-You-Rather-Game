
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa/index'
import { formatPoll } from '../data/helpers'

class PollDetails extends Component {
    render() {
    const { poll, id } = this.props      
    const { hasVoted1, hasVoted2, optionOne, optionTwo, avatar, name } = poll

        return(
            <div className="pollContainer">
                <div className="poll">
                <p>{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
                    <p>{hasVoted1 === true && <FaCheck color="Green"/>} {optionOne.text}<br/>
                    {hasVoted2 === true && <FaCheck color="Green"/>} {optionTwo.text}</p>
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