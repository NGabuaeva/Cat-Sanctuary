import { combineReducers } from 'redux'
import { cats, cat } from './cats'

const rootReducer = combineReducers({ cats, cat })

export default rootReducer
