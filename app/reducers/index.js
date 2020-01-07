import { combineReducers } from 'redux'
import { cats } from './cats'
import { cat } from './cat'
const rootReducer = combineReducers({ cats, cat })

export default rootReducer
