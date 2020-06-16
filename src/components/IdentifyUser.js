
import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser"

class IdentifyUser extends Component {

    handleLogout = (e) => {
        const { dispatch, history } = this.props

        e.preventDefault();
        dispatch(setAuthedUser(null));

        history.push("/");
    };
    
    render() {
        const { user } = this.props
        const { name, avatarURL } = user

        return(
            <div className="userIdentity">
                <img alt="user avatar" src={avatarURL}/>{name}<br/>
                <button className="logoutBtn" onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => {
	const user = users[authedUser];

	return {
		user
	};
};

export default withRouter(connect(mapStateToProps)(IdentifyUser));
