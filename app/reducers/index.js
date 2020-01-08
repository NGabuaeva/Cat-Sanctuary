import { combineReducers } from 'redux'
import { cats } from './cats'
import { cat } from './cat'

//combining reducers to keep it clean in case we wanna add dogs or other pets later
const rootReducer = combineReducers({ cats, cat })

export default rootReducer
