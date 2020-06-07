/* Dashboard tab - Open Polls */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './MyResponses'

class OpenPolls extends Component {
  render() {
    return (
      <div>
        Open Polls
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    pollIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(OpenPolls);