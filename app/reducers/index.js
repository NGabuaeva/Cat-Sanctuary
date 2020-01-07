import { combineReducers } from 'redux'
import { cats } from './cats'

//I'm using combineReducers in case we wanna add dogs or other animals to the page later, but for now just cats
const rootReducer = combineReducers({ cats })

export default rootReducer
