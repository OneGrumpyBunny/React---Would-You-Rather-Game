import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './polls'  /* importing as a different name */
import { loadingBarReducer } from 'react-redux-loading'

// es6 shorthand
export default combineReducers({  
    authedUser,   
    users,
    questions,
    loadingBar: loadingBarReducer,
})