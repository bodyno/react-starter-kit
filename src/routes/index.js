// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './example/Home'
import CounterRoute from './example/Counter'
import ZenRoute from './example/Zen'
import ElapseRoute from './example/Elapse'
import FormRoute from './example/Form'
import RouteRoute from './example/Route'
import PageNotFound from './example/PageNotFound'
import Test from './example/Test'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    childRoutes: [
      CounterRoute(store),
      ZenRoute(store),
      ElapseRoute(store),
      FormRoute(store),
      RouteRoute(store),
      Test(store)
    ]
  },
  {
    path: '/404',
    indexRoute: PageNotFound
  },
  {
    path: '*',
    indexRoute: {
      onEnter(nextState,replace){
        replace('/404')
      }
    }
  }
])

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
