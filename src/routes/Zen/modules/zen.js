// ------------------------------------
// Constants
// ------------------------------------
const RECEIVE_ZEN = 'RECEIVE_ZEN'
const REQUEST_ZEN = 'REQUEST_ZEN'
const CLEAR_ZEN = 'CLEAR_ZEN'

// ------------------------------------
// Actions
// ------------------------------------

function requestZen () {
  return {
    type: REQUEST_ZEN
  }
}

let avaliableId = 0
export const receiveZen = (value) => ({
  type: RECEIVE_ZEN,
  payload: {
    text: value,
    id: avaliableId++
  }
})

export const clearZen = () => ({
  type: CLEAR_ZEN
})

export function fetchZen () {
  return (dispatch, getState) => {
    if (getState().zen.fetching) return

    dispatch(requestZen())
    return fetch('https://api.github.com/zen')
      .then(data => data.text())
      .then(text => dispatch(receiveZen(text)))
  }
}

export const actions = {
  requestZen,
  receiveZen,
  clearZen,
  fetchZen
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_ZEN]: (state) => {
    return ({...state, fetching: true})
  },
  [RECEIVE_ZEN]: (state, action) => {
    return ({...state, fetching: false, text: state.text.concat(action.payload)})
  },
  [CLEAR_ZEN]: (state) => {
    return ({...state, text: []})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  text: []
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
