// ------------------------------------
// Constants
// ------------------------------------
const GET_DATA = 'GET_DATA';


// ------------------------------------
// Actions
// ------------------------------------
function getData(){
  return {
    type: GET_DATA
  }
}

export default function fetchTable(){
  return (dispatch, getState) => {

  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_DATA]: (state) => {
    return ({...state, fetching: true})
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
