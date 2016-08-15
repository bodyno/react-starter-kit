import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>React Starter Kit ---- <a href='https://bodyno.com' target='_blank'>bodyno</a></h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/zen' activeClassName={classes.activeRoute}>
      Zen
    </Link>
    {' · '}
    <Link to='/elapse' activeClassName={classes.activeRoute}>
      Elapse
    </Link>
    {' · '}
    <Link to='/form' activeClassName={classes.activeRoute}>
      Form
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName={classes.activeRoute}>
      Route
    </Link>
    {' · '}
    <Link to='/test' activeClassName={classes.activeRoute}>
      Test
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName={classes.activeRoute}>
      404
    </Link>
  </div>
)

export default Header
