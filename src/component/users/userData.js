import React, { useState } from 'react';
import css from './user.module.css';
import './userButton.css';
import Dot from '../../assets/svg/dot.svg'
import Delete from '../../assets/svg/delete.png'
import Setting_popUp from '../Settings/Setting_popUp';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../shared/spinner/spinner';

export default function UserData({ user, handleUserSelection, selectedUsers, getUser }) {
  const [isloading, setIsloading] = useState(false);
  const [change, setChange] = useState(true);
  ////////////////////////////////
  const userId = useSelector(state => state.loginUser.user)
  const token = userId.token
  const deleteUser = async () => {
    setIsloading(true)
    const id = user._id
    try {
      const res = await axios({
        method: 'delete',
        url: `${API_HOST}/user/deleteUser/${id}`,
        data: {},
        headers: {
          token: token
        }
      })
      getUser()
      setIsloading(false)
      toast.error(`user Deleted`, { position: toast.POSITION.TOP_CENTER });
      return;
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <tr>
      <td className={css.gap}>
        <input
          type="checkbox"
          checked={selectedUsers.includes(user._id)}
          onChange={() => handleUserSelection(user._id)}
        />
        {isloading && <Spinner />}
        <img className={css.img_width} src={user.image} alt="User" />
        <strong style={{ color: '#000000' }}>{user.name}</strong>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <span className="span1" style={{ backgroundColor: "#ADD8E6", padding: ".7rem 1.3rem", borderRadius: "1rem" }}>Active</span>
      </td>
      <td>{user.created_at}</td>
      <td><img src={Delete} alt="Delete" onClick={deleteUser} style={{ cursor: "pointer" }} /></td>
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
      <ToastContainer />
    </tr>
  );
}
