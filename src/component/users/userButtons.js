import React from 'react'
import person from '../../assets/svg/person-add.svg'
import del from '../../assets/svg/white-del.svg'
import select from '../../assets/svg/select1.svg'
import select1 from '../../assets/svg/rectangular.svg'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Spinner from '../shared/spinner/spinner'




export default function UserButtons({ selectedUsers, getUser }) {
  const [isloading, setIsloading] = useState(false);
  const userId = useSelector(state => state.loginUser.user)
  const token = userId.token

  //////////////////////////////////////
  const handleDeletemultiple = () => {

    if (selectedUsers.length <= 0) {
      toast.error(`Select user to delete`, { position: toast.POSITION.TOP_CENTER });
      return;
    }
    setIsloading(true)
    try {
      selectedUsers.map(async (row) => {
        const id = row
        try {
          const res = await axios({
            method: 'delete',
            url: `${API_HOST}/user/deleteUser/${id}`,
            data: {},
            headers: {
              token: token
            }
          })
        } catch (err) {
          console.log(err)
          return;
        }
      })
      getUser()
      setIsloading(false)
      toast.error(`user Deleted`, { position: toast.POSITION.TOP_CENTER });
      return;
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <ToastContainer />
      <ul className='user_buttons' style={{ float: 'right' }}>
        {/* <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary button_one size" type="button">
              <img className='img_1' src={person} />  Add User
            </button>

          </div>
        </li> */}
        {isloading && <Spinner />}
        <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary button_two size" type="button" >
              <img className='img_2' src={select1} /><img className='tick_img' style={{ width: '10px' }} src={select} />  Select All
            </button>

          </div>
        </li>
        <li>
          <button className="btn btn-secondary button_three size" type="button" onClick={handleDeletemultiple}>
            <img className='img_3' src={del} />   Delete Multiple
          </button>
        </li>
      </ul>
    </div>
  )
}
