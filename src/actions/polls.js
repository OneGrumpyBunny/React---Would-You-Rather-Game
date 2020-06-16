import { saveQuestionAnswer, savePoll } from '../data/api'
import { saveAnswerToUser, savePollToUser } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_ANSWER = 'SAVE_ANSWER' 
export const ADD_POLL = 'ADD_POLL'


export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

function addPoll (poll) {

    return {
        type: ADD_POLL,
        poll
    }
}

function saveAnswerToQuestion ({ authedUser, qid, answer }) {
    return {
      type: SAVE_ANSWER,
      authedUser,
      qid,
      answer
    }
  }

export function handleSaveAnswer (info) {
    return (dispatch) => {
        dispatch(showLoading())

        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(saveAnswerToUser(info))
            dispatch(saveAnswerToQuestion(info))
        })
        .then(() => dispatch(hideLoading()))

        .catch((e) => {
            console.warn('Error in handleSaveAnswer: ', e)
            alert('There was an error saving your the answer. Try again.')
        })
    }
}

export function handleSavePoll (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        
        dispatch(showLoading())

        return savePoll({
            author: authedUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        })
        .then((poll) => {
            dispatch(addPoll(poll))
            dispatch(savePollToUser(poll))
        })
        .then(() => dispatch(hideLoading()))
    }
}
