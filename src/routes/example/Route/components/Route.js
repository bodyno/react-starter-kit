import React, {Component} from 'react'
import { Link, withRouter } from 'react-router';

class Route extends Component {

  redirect () {
    this.props.router.push('/form')
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
