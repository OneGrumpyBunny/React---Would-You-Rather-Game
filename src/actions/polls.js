import { savePoll } from '../data/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
/*export const TOGGLE_POLL = 'TOGGLE_POLL' */
export const ADD_POLL = 'ADD_POLL'

function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function handleAddPoll (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return savePoll({
            author: authedUser,
            optionOne,
            optionTwo
        })
        .then((poll) => dispatch(addPoll(poll)))
        .then(() => dispatch(hideLoading()))
    }
}

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

/*function togglePoll ({ id, authedUser, hasLiked }) {  
  return {
    type: TOGGLE_POLL,
    id,
    authedUser,
    hasLiked
  }
}

export function handleTogglePoll (info) {
    return (dispatch) => {
        dispatch(togglePoll(info))

        return saveLikePoll(info)
        .catch((e) => {
            console.warn('Error in handleTogglePoll: ', e)
            dispatch(togglePoll(info))
            alert('There was an error liking the poll. Try again.')
        })
    }
}
*/