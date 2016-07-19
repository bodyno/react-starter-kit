import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers'

export default (initialState = {}, history) => {
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  // Use DevTools chrome extension in development
  if (__DEBUG__) {
    const logger = createLogger()
    const devToolsExtension = window.devToolsExtension

    middleware = applyMiddleware(thunk, routerMiddleware(history), logger)

    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducers(), initialState, middleware)

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default

      store.replaceReducer(reducers)
    })
  }

  return store
}
