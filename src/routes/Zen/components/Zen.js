import React, {Component} from 'react'
import './Zen.scss'
import Spinner from 'react-spinkit'

export default class Zen extends Component {

  render () {
    const { fetchZen, clearZen, zen: {fetching, text} } = this.props

    return (
      <div>
        <div>
          <button className='btn btn-default' onClick={fetchZen}>
            {fetching ? 'Fetching...' : 'Fetch'}
          </button>
          &nbsp;&nbsp;
          <button className='btn btn-default' onClick={clearZen}>Clear</button>
        </div>
        { fetching ?
          <div className='loading'>
            <Spinner spinnerName='double-bounce' />
          </div> : ''
        }
        <div>
          {text.map(item => (
            <h1 key={item.id}>{item.text}</h1>
          ))}
        </div>
      </div>
    )
  }
}

Zen.propTypes = {
  zen: React.PropTypes.object.isRequired
}
