import React from 'react'
import User from './user'
import { Link } from 'react-router-dom'
export default function UserData(user) {

  return (
    <tr>
      <td><input type="checkbox" name="name1" /></td>
      <td>{user.user.name}</td>
      <td>{user.user.email}</td>
      <td>{user.user.phone}</td>
      <td><span className='span1'>{user.user.status}</span></td>
      <td>{user.user.Duration}</td>
      <td className='action'><img src={user.user.deleteImg} /> <Link to={'/userMenu'}> <img src={user.user.dotImg} /></Link></td>
    </tr>
  )
}
