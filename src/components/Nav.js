import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Open Polls
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            My Responses
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}