import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

// NOT AN OBJECT
export default applyMiddleware(
    thunk,
    logger,
)

