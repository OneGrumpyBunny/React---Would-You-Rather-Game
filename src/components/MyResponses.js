/* Dashboard tab - My Responses */

import React, {Component} from 'react';
import { connect } from 'react-redux'

class MyResponses extends Component {
    render() {
        return(
            <div>
                My Responses
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

export default connect(mapStateToProps)(MyResponses);
