import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

//create store with the root reducer that combines all reducers
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  ))
)
