import React, {Component} from 'react'
import classes from './Zen.scss'
import Loader from 'halogen/ClipLoader'

const child = (item) => (
  <h1 key={item.id}>{item.text}</h1>
)

export default class Zen extends Component {

  renderLoading () {
    return (this.props.zen.fetching)
      ? <div className={classes.loader}><Loader color='#26A65B' /></div>
      : ''
  }

  render () {
    const props = this.props

    return (
      <div>
        <div>
          <button className='btn btn-default' onClick={props.fetchZen}>
            {props.zen.fetching ? 'Fetching...' : 'Fetch'}
          </button>
          &nbsp;&nbsp;
          <button className='btn btn-default' onClick={props.clearZen}>Clear</button>
        </div>
        {this.renderLoading()}
        <div>
          {props.zen.text.map(child)}
        </div>
      </div>
    )
  }
}
