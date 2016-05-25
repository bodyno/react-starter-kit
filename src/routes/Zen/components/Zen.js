import React,{Component} from 'react'
import classes from './Zen.scss'
import Loader from 'halogen/RingLoader'
import { If, Then, Else } from 'react-if';

const child=(item)=>(
  <h1 key={item.id}>{item.text}</h1>
)

export default class Zen extends Component{

  render(){
    const props=this.props;

    return (
      <div className={classes.zen}>
        <div>
          <button class='btn btn-default' onClick={props.fetchZen}>{props.zen.fetching?'Fetching...':'Fetch'}</button>&nbsp;&nbsp;
          <button class='btn btn-default' onClick={props.clearZen}>Clear</button>
        </div>
        <If condition={props.zen.fetching}>
          <Then>
            <div className={classes.loader}>
              <Loader color="#26A65B" />
            </div>
          </Then>
        </If>
        <div>
          {props.zen.text.map(child)}
        </div>
      </div>
    )
  }
}
