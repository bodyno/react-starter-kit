import React from 'react'
import classes from './Zen.scss'

const child=(item)=>(
  <h1 key={item.id}>{item.text}</h1>
)

export default (props)=>(
  <div className={classes.ok}>
    <button class='btn btn-default' onClick={props.fetchZen}>{props.zen.fetching?'Fetching...':'Fetch'}</button>&nbsp;&nbsp;
    <button class='btn btn-default' onClick={props.clearZen}>Clear</button>
    <div>
      {props.zen.text.map(child)}
    </div>
  </div>
)
