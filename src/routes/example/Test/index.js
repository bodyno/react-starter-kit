import {injectReducer} from '../../../store/reducers'

export default(store) => ({
  path: 'test',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./components/Test').default
      injectReducer(store, {key: 'test'})
      cb(null, Route)
    }, 'test')
  }
})
