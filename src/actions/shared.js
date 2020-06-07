import { getInitialData } from '../data/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'
 
export function handleInitialData() {
    return (dispatch) => {  
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, polls }) => {
            dispatch(receiveUsers(users))         // dispatching action creators
            dispatch(receivePolls(polls))       // dispatching action creators
            dispatch(setAuthedUser(AUTHED_ID))    // dispatching action creators 
            dispatch(hideLoading())
        })
    }
}