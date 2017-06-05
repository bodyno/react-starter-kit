import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Elapse extends Component {

  componentDidMount () {
    this.interval = setInterval(this.props.plus, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {elapse} = this.props
    return (
      <h1>
        Seconds Elapsed: {elapse}
      </h1>
    )
  }
}

Elapse.propTypes = {
  elapse: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired
}
