import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa/index'

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
          <NavLink to='/responses' activeClassName='active'>
            My Responses
          </NavLink>
        </li>
        
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>

        <li className="newFormIcon">
          <NavLink to='/newPoll' activeClassName='active'>
            <FaPlus/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}