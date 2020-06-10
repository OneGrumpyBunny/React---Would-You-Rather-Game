/* Dashboard Tab - Leaderboard */


import React, {Component} from 'react';
import { connect } from 'react-redux'

class Leaderboard extends Component {
    render() {
        return(
            <div>
                Leaderboard
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

export default connect(mapStateToProps)(Leaderboard);