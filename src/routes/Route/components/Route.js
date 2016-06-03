import React, {Component} from 'react'
import { Link } from 'react-router';

class Route extends Component {

  /*componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  routerWillLeave(nextLocation) {
    return 'Your work is not saved! Are you sure you want to leave?'
  }*/

  redirect () {
    this.props.router.push('/form')
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.params.id)
  }

  render () {
    const {location} = this.props

    return (
      <div>
        <h1>
          Path: <Link to="/route/99">{location.pathname}</Link>
        </h1>
        <div>
          <button onClick={this.redirect.bind(this)}>Go</button>
        </div>
      </div>
    )
  }
}
export default Route
