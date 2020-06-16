
import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { formatLeader } from '../data/helpers'

class Author extends Component {
    
  render() {
      
    const { author } = this.props

    const { name, avatar, numAsked, numAnswered, rank } = author

    if (author === null) {
      return <p>No authors returned</p>
    }
    
    return (
        <div className="leaders">
            <p>{<img className="avatar" alt="user avater" src={avatar}/>} {name}</p>
            <p>{numAsked}</p>
            <p>{numAnswered}</p>
            <p>#{rank}</p>
        </div>
    )
  }
}
function mapStateToProps ({ authedUser, users }, { id, index }) {
  const author = users[id]

  return {
    authedUser,
    author: author
      ? formatLeader(author, index, authedUser)
      : null
  }
}
export default withRouter(connect(mapStateToProps)(Author))