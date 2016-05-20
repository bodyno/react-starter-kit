import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'elapse',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Elapse = require('./containers/ElapseCntainer').default
      const reducer = require('./modules/elapse').default
      injectReducer(store, { key: 'elapse', reducer })
      cb(null, Elapse)

    }, 'elapse')
  }
})
