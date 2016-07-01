import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes, routerKey, store } = this.props
    const pageChange = () => window.scrollTo(0, 0)

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={routes} key={routerKey} onUpdate={pageChange} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
