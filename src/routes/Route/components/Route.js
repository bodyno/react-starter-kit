import React,{Component} from 'react'

export default class Route extends Component{

  render(){
    const {route}=this.props
    return (
      <h1>
        Route {route}
      </h1>
    )
  }
}
