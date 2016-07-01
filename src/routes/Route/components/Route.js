import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

class Route extends Component {

  constructor (props) {
    super(props)
    this.redirect = this.redirect.bind(this)
  }

  redirect () {
    this.props.router.push('/form')
  }

  render () {
    const { location } = this.props

    return (
      <div>
        <h1>
          Path: <Link to='/form'>{location.pathname}</Link>
        </h1>
        <div>
          <button onClick={this.redirect}>Go</button>
        </div>
      </div>
    )
  }
}

Route.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default withRouter(Route)
