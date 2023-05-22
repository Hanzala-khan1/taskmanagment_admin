import React, { useState } from 'react'
import css from './user.module.css'
import './userButton.css'
import Setting_popUp from '../Settings/Setting_popUp';
export default function UserData(user) {
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange(!change);
  }
  return (
    <tr>
      <td className={css.gap}>
        <input type="checkbox" name="name1" />
        <img className={css.img_width} src={user.user.userImg} />
        <strong>{user.user.name}</strong> </td>
      {/* <td>{user.user.name}</td> */}
      <td>{user.user.email}</td>
      <td>{user.user.phone}</td>
      <td><span className='span1'>{user.user.status}</span></td>
      <td>{user.user.Duration}</td>
      <td className='action'><img src={user.user.deleteImg} />
        <div class="dropdown">
          <a type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img
              onClick={handleChange}
              src={user.user.dotImg}
            />
            {change && <Setting_popUp editCategory={true} />}
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Change Password</a>
            <a className="dropdown-item" href="#">Additional Option</a>
          </div>
        </div>
      </td>
    </tr>
  )
}
