/* Child componenet - To render individual polls */
import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { formatPoll } from '../data/helpers'
import { Link, withRouter } from 'react-router-dom'
import { formatLeader } from '../data/helpers'
import { FaCheck } from 'react-icons/fa/index'

class Author extends Component {
    
  render() {
      
    const { author } = this.props

    const { name, avatar, numAsked, numAnswered, rank } = author

    if (author === null) {
      return <p>No authors returned</p>
    }
    
    return (
        <div className="leaders">
            <p>{<img className="avatar" src={avatar}/>} {name}</p>
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