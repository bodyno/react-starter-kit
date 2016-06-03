import React, { Component } from 'react'
import NotFoundImage from '../assets/404.jpg'

export default class PageNotFound extends Component{
  render(){

    return (
      <div>
        <h1>Page not found!!!</h1>
        <img src={NotFoundImage}/>
      </div>
    )
  }
}
