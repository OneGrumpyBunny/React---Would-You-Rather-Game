
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { formatPoll } from '../data/helpers'
import { handleSaveAnswer } from '../actions/polls'

class PollVote extends Component {
    state = {
        toDetails: false
    }

  handleAnswer = (e) => {
    e.preventDefault()    
    const { dispatch, poll, authedUser } = this.props
    
    dispatch(handleSaveAnswer({
      authedUser,
      qid: poll.id,
      answer: e.target.value,
    }))

    this.setState(() => ({
        toDetails: true,
    }))
    
  }

    render() {
    const { poll } = this.props      
    
    if (!poll) {
        return <Redirect to='/error404' />
    }

    const { optionOne, optionTwo, avatar, name, id } = poll
    const { toDetails } = this.state

    if (toDetails === true) {
        return <Redirect to={`/questions/${id}`}/>
    }
        return(
            <div className="pollsList">
            <h3><em>Would you rather...</em></h3>
                <div className="pollContainer">
                    <p className="zeroMargin">{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
                        <div className="pollDetail">
                            <p>{optionOne.text}</p>
                            <p>{optionTwo.text}</p>
                    </div>  
                    <div className="pollDetail">
                        <p><button className="voteBtn" value="optionOne" onClick={this.handleAnswer}>Select this Option!</button></p>
                        <p><button className="voteBtn"value="optionTwo" onClick={this.handleAnswer}>Select this Option!</button></p>
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
        authedUser,
        poll: poll
      ? formatPoll(poll, users[poll.author], authedUser)
      : null     
    }
  }
  export default withRouter(connect(mapStateToProps)(PollVote))
        