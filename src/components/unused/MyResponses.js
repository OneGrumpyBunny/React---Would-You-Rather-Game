/* Dashboard tab - My Responses */

import React, {Component} from 'react';
import { connect } from 'react-redux'
import Poll from './Poll'

class MyResponses extends Component {
    render() {
        
        return(
            <div className="pollsList">
                <h3><em>Would you rather...</em></h3>
                {this.props.pollIds.map((id) => (              
                    <div key={id}>
                        <Poll id={id}/>
                    </div>
                ))}
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
