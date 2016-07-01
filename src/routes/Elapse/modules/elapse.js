// ------------------------------------
// Constants
// ------------------------------------
export const PLUS = 'PLUS'

// ------------------------------------
// Actions
// ------------------------------------

export function plus () {
  return {
    type: PLUS
  }
}

export const actions = {
  plus
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [PLUS]: (state) => {
    return state + 1
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function elapseReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
