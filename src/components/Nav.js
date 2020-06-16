import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='navActive'>
            Open Polls
          </NavLink>
        </li>
        <li>
          <NavLink to='/responses' activeClassName='navActive'>
            Answered Polls
          </NavLink>
        </li>
        
        <li>
          <NavLink to='/leaderboard' activeClassName='navActive'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='navActive'>
            New Poll
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}