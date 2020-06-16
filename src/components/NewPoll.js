/* Child Component  - New Poll Form */

import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleSavePoll } from '../actions/polls'

class NewPoll extends Component {
    state = {
        buttonDisabled: true,
        optionOne: '',
        optionTwo: '',
        toHome: false
    };  

    handleChange = (e) => {
        const { value, name } = e.target
        const  { optionOne, optionTwo } = this.state

        this.setState(() => ({
            optionOne: name === "optionOne" ? (value) : optionOne,
            optionTwo: name === "optionTwo" ? (value) : optionTwo,
            buttonDisabled: !optionOne || !optionTwo ? true : false
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const { dispatch, id } = this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleSavePoll(optionOne, optionTwo))
        
        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            buttonDisabled: true,
            toHome: id ? false : true,
        }))
    };
    
    render() {
        const { buttonDisabled, toHome } = this.state

        if (toHome) {
            return <Redirect to='/' />
        }

        return(
            <div className="newPollForm">
                <h2>Would you rather ...</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="optionOne" onChange={this.handleChange} placeholder="Enter option one here"/>
                    <p>OR</p>
                    <input type="text" name="optionTwo" onChange={this.handleChange} placeholder="Enter option two here"/>
                    <button                        
                        disabled={buttonDisabled}>
                        Save
                    </button>
                </form> 
            </div>
        )
    }
}

export default withRouter(connect()(NewPoll));