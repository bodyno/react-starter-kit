import reqwest from 'reqwest';
// ------------------------------------
// Constants
// ------------------------------------
const REQUEST = 'REQUEST';
const RECEIVE = 'RECEIVE';
const COMPLETE = 'COMPLETE';
const CHANGE = 'CHANGE';
// ------------------------------------
// Actions
// ------------------------------------
function request() {
  return {
    type: REQUEST
  }
}

function receive(data, getState, pagination) {
  const pager = getState().table.pagination;
  pager.total = 200;
  return {
    type: RECEIVE,
    data: data.results,
    page: pager
  }
}


function complete() {
  return {
    type: COMPLETE
  }
}

function change(pagination) {
  return {
    type: CHANGE,
    page: pagination
  }
}

export function onChange(pagination, filters, sorter) {
  return (dispatch, getState) => {
    const pager = getState().table.pagination;
    pager.current = pagination.current;
    dispatch(change(pager));
    dispatch(fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    }));
  }
}

export function fetch(params = {}) {
  return (dispatch, getState) => {
    if (getState().table.loading) {
      return;
    }

    dispatch(request());

    return (
      reqwest({
        url: 'http://api.randomuser.me',
        method: 'get',
        data: {
          results: 10,
          ...params
        },
        type: 'json'
      }).then(data => {
        dispatch(receive(data, getState));
        dispatch(complete());
      })
    )
  }
}



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST]: (state) => {
    return ({...state,
      loading: true
    })
  },
  [RECEIVE]: (state, action) => {
    return ({...state,
      data: action.data,
      pagination: action.page
    })
  },
  [COMPLETE]: (state) => {
    return ({...state,
      loading: false
    })
  },
  [CHANGE]: (state, action) => {
    return ({...state,
      pagination: action.page
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: [],
  pagination: {},
  loading: false
}
export default function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
