import React, { useState } from 'react';
import css from './user.module.css';
import './userButton.css';
import Dot from '../../assets/svg/dot.svg'
import Delete from '../../assets/svg/delete.png'
import Setting_popUp from '../Settings/Setting_popUp';

export default function UserData({ user }) {

  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
  };

  return (
    <tr>
      <td className={css.gap}>
        <input type="checkbox" name="name1" />
        <img className={css.img_width} src={user.image} alt="User" />
        <strong style={{ color: '#000000' }}>{user.name}</strong>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <span className="span1">active</span>
      </td>
      <td>{user.created_at}</td>
      <td><img src={Delete} alt="Delete" /></td>
      {/* <td className="action">
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
            <img src={Dot} alt="Dropdown" />
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"
            style={{ backgroundColor: '#282828', padding: "10px", textAlign: 'center' }}>
            <a
              className="hov"
              style={{ color: '#ffffff' }}
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={handleChange}
            >
              Change Password
            </a>
            <br></br>
            <span className="" style={{ color: '#ffffff' }} href="#">
              Additional Option
            </span>
          </div>
        </div>
        {change && <Setting_popUp editCategory={true} />} */}
      {/* </td> */}
    </tr>
  );
}
