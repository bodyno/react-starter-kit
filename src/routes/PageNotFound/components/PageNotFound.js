import React, { Component } from 'react'
import NotFoundImage from '../assets/404.jpg'
import classes from './PageNotFound.scss'

export default class PageNotFound extends Component{

  back(){
    console.log(this.props.router);
  }

  render(){

    return (
      <div className={classes.container}>
        <h1>Page not found!!!</h1>
        <h3>
          <a className={classes.link} onClick={this.back.bind(this)}>Back</a>
        </h3>
        <img src={NotFoundImage}/>
      </div>
    )
  }
}
