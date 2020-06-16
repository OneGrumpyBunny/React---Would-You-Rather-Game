
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Poll from './Poll'

class OpenPolls extends Component {
  
  render() {
    
    const { pollIds } = this.props

    return (
      <Router>
        <div className="pollsList">          
            <h3><em>Would you rather...</em></h3>
            {pollIds.map((id) => (              
              <div key={id}>
                <Poll id={id}/>
              </div>
            ))}
        </div>
      </Router>
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
