import React,{Component} from 'react'
import classes from './Zen.scss'
import Loader from 'halogen/RingLoader'

const child=(item)=>(
  <h1 key={item.id}>{item.text}</h1>
)

export default class Zen extends Component{

  renderBody() {
    return (this.props.zen.fetching)
      ? <div className={classes.loader}><Loader color="#26A65B" /></div>
      : ''
  }

  render(){
    const props=this.props;

    return (
      <div className={classes.zen}>
        <div>
          <button class='btn btn-default' onClick={props.fetchZen}>{props.zen.fetching?'Fetching...':'Fetch'}</button>&nbsp;&nbsp;
          <button class='btn btn-default' onClick={props.clearZen}>Clear</button>
        </div>
        {this.renderBody()}
        <div>
          {props.zen.text.map(child)}
        </div>
      </div>
    )
  }
}
