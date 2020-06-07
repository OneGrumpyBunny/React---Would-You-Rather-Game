import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls'

export default function polls (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
      /*case ADD_POLL :
        const { poll } = action

        let replyingTo = {}
        if (poll.replyingTo !== null) {
          replyingTo = {
            [poll.replyingTo]: {
              ...state[poll.replyingTo],
              replies: state[poll.replyingTo].replies.concat([poll.id])
            }
          }
        }
        return {
          ...state,
          [action.poll.id]: action.poll,
          ...replyingTo
        }*/
    default :
      return state
  }
}