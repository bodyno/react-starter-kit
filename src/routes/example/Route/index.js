import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: 'route/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./containers/RouteContainer').default
      const reducer = require('./modules/route').default
      injectReducer(store, { key: 'route', reducer })
      cb(null, Route)
    }, 'route')
  }
})
