import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'zen',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./container').default
      const reducer = require('./modules').default
      injectReducer(store, { key: 'zen', reducer })
      cb(null, Counter)

    }, 'zen')
  }
})
