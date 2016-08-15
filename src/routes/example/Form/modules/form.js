// ------------------------------------
// Constants
// ------------------------------------
const SUBMIT_FORM = 'SUBMIT_FORM'

// ------------------------------------
// Actions
// ------------------------------------
export function submit () {
  return {
    type: SUBMIT_FORM
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [submit]: (state) => {
    return ({...state})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
