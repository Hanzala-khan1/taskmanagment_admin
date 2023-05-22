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
          <li > <Link to="/project">Projects</Link></li>
          <li > <Link to="/quicktask">Quick Task</Link></li>
          <li > <Link to="/categories"> Categories</Link></li>
          <li > <Link to="/chats">Chats</Link> </li>
          <li > <Link to="/user">users</Link> </li>
        </ul>
      </div>
    </div>
  )
}
export default Lower_nav
