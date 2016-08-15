import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: 'form',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Zen = require('./containers/FormContainer').default
      const reducer = require('./modules/form').default
      injectReducer(store, { key: 'formPage', reducer })
      cb(null, Zen)
    }, 'form')
  }
})
