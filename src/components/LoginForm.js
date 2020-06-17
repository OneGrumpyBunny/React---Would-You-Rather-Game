import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class LoginForm extends Component {
	state = {
        userId: "",
        buttonDisabled: true
	};

	handleChange = (e) => {
        const { value } = e.target
		this.setState({ 
            userId: value,
            buttonDisabled: value ? false : true
        })
	};

	handleSubmit = (e) => {
        const { dispatch } = this.props
        const { userId } = this.state 

		e.preventDefault();
		dispatch(setAuthedUser(userId))
	};

    render() {
        const { users } = this.props
        const { buttonDisabled } = this.state 

        return(
            <div className="signinForm">            
            <h2><em>Welcome to the Would You Rather App!</em></h2>
            <h3>Please sign in to continue</h3>
                <form onSubmit={this.handleSubmit}> 
                    <select onChange={this.handleChange}>
                        <option value="" disabled="">Select user</option>
                        {Object.values(users).map((user) => (
                            <option 
                                key={user.id} 
                                value={user.id}
                            >
                                {user.name}
                            </option>                            
                        ))}
                    </select>
                    <button                        
                        disabled={buttonDisabled}
                       >
                        Sign In
                    </button>
                </form>
        </div>
        )
    }
}

function mapStateToProps({ users }) {
	return {
		users
	};
}
export default connect(mapStateToProps)(LoginForm);