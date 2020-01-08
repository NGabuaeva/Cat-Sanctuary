import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/root'

//wrap all components in a provider, register the redux store
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
)
