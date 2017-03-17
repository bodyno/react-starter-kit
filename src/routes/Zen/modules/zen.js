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
  payload: JSON.parse(value).data[0]
})

export const clearZen = () => ({
  type: CLEAR_ZEN
})

export function fetchZen (pagenum = 1) {
  return (dispatch, getState) => {
    if (getState().zen.fetching) return

    dispatch(requestZen())
    return fetch('https://172.16.20.29/wifi/monitor/apstatusLists/accesstoken/SESSION-a4c25838f0d64f51917e22244f5e4cae/pagesize/100/page/' + pagenum)
      .then(data => data.text())
      .then(page => dispatch(receiveZen(page)))
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
    return ({...state, fetching: false, page: action.payload})
  },
  [CLEAR_ZEN]: (state) => {
    return ({...state, page: {}})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  page: {data:[{lists:[],page:1,pagesize:10,totle:0}]}
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
