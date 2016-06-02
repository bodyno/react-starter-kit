import React, {Component} from 'react'
import { Link, withRouter } from 'react-router';

class Route extends Component {

  /*componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  routerWillLeave(nextLocation) {
    return 'Your work is not saved! Are you sure you want to leave?'
  }*/

  redirect () {
    this.props.router.replace({
      pathname: '/form',
      state: { nextPathname: '/elapse' }
    })
  }

  render () {
    const {location} = this.props

    return (
      <div>
        <h1>
          Path: <Link to="/form">{location.pathname}</Link>
        </h1>
        <div>
          <button onClick={this.redirect.bind(this)}>Go</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Route)
