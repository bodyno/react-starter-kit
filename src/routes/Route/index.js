export default (store) => ({
  path: 'route/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Route = require('./components/Route').default
      cb(null, Route)
    })
  }
})
