import React from 'react'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import '../project/projects.css'
function Lower_nav() {

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        <h3 className='heading1'>Projects</h3>
      </div>
      <br></br>
      <div >
        <ul className='list'>
          <li > <Link to="/project" className='lower_a'>Projects</Link></li>
          <li > <Link to="/quicktask" className='lower_a'>Quick Task</Link></li>
          <li > <Link to="/categories" className='lower_a'> Categories</Link></li>
          <li > <Link to="/chats" className='lower_a'>Chats</Link> </li>
          <li > <Link to="/user" className='lower_a'>Users</Link> </li>
        </ul>
      </div>
    </div>
  )
}
export default Lower_nav
