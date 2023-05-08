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
          <li > <Link to="/project"><a>Projects</a></Link></li>
          <li > <Link to="/quicktask"><a>Quick Task</a></Link></li>
          <li > <Link to="/categories"> <a>Categories</a></Link></li>
          <li > <Link to="/chats"><a>Chats</a></Link> </li>
          <li > <Link to="/user"><a>users</a></Link> </li>
        </ul>
        {/* <Filter/> */}
      </div>
    </div>
  )
}
export default Lower_nav
