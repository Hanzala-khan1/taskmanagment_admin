import React, { useState } from 'react';
import css from './user.module.css';
import './userButton.css';
import Setting_popUp from '../Settings/Setting_popUp';

export default function UserData(user) {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
  };

  return (
    <tr>
      <td className={css.gap}>
        <input type="checkbox" name="name1" />
        <img className={css.img_width} src={user.user.userImg} alt="User" />
        <strong>{user.user.name}</strong>
      </td>
      <td>{user.user.email}</td>
      <td>{user.user.phone}</td>
      <td>
        <span className="span1">{user.user.status}</span>
      </td>
      <td>{user.user.Duration}</td>
      <td><img src={user.user.deleteImg} alt="Delete" /></td>
      <td className="action">
        <div className="dropdown"  
        >
          <a
            href="#"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={handleChange}
          >
            <img src={user.user.dotImg} alt="Dropdown" />
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" 
          style={{ backgroundColor: '#282828', padding:"10px", textAlign:'center'}}>
            <a
              className="hov"
              style={{ color:'#ffffff' }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleChange}
            >
              Change Password
            </a>
            <br></br>
            <span className="" style={{color:'#ffffff'}} href="#">
              Additional Option
            </span>
          </div>
        </div>
        {change && <Setting_popUp editCategory={true} />}
      </td>
    </tr>
  );
}
