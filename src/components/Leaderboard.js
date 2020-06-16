
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Author from './Author'

class Leaderboard extends Component {
    
    render() {
        const { authorIds } = this.props

        return(
            <div className="leadersList">
                <h3><em>Would you rather... Leaderboard</em></h3>
                <div className="leaders head">
                    <p>Name</p>
                    <p>Polls Asked</p>
                    <p>Polls Answered</p>
                    <p>Rank</p>
                </div>
                <hr/>
                {authorIds.map((id, index) => (              
                    <div key={id}>
                    <Author 
                        id={id} 
                        index={index+1}
                    />
                    </div>
                ))}
            </div>          
        )
    }
}

  function mapStateToProps ({ users }) {
    return {    
      authorIds: Object.keys(users)
        .sort((a,b) => ((Object.keys(users[b].answers).length + Object.keys(users[b].questions).length)-(Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)))
    }
  }
  

export default withRouter(connect(mapStateToProps)(Leaderboard));

