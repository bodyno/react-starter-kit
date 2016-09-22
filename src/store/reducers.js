import { combineReducers } from 'redux'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
