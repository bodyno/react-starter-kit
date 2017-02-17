import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>This is a duck, because Redux!</h4>
    <img className='duck' src={DuckImage} />
  </div>
)

export default HomeView
