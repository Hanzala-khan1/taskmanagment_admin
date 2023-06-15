import React, { useState } from 'react'
import './Setting_popUp.css'
import lock_key from '../../assets/svg/lock-key.svg'
import { useSelector } from 'react-redux';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Setting_popUp({ editCategory }) {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("")
  const [error, setError] = useState("")
  console.log(password, confirmpassword, oldPassword)


  const user = useSelector((state) => state.loginUser.user);
  const id = user.info._id;
  //////////////////////////////////
  const handlechangepassword = async () => {
    if (!oldPassword || !password || !confirmpassword) {
      toast.error(`Please fill all fields`, { position: toast.POSITION.TOP_CENTER });
      return;
      ;
    }
    else {
      try {
        if (password === confirmpassword) {
          const res = await axios({
            method: 'put',
            url: `${API_HOST}/user/updatePassword/${id}`,
            data: {
              newPassword: `${password}`,
              oldPassword: `${oldPassword}`
            }
          })
          toast.error(`password change successfully`, { position: toast.POSITION.TOP_CENTER });
          return;
        } else {
          toast.error(`password doesn't match`, { position: toast.POSITION.TOP_CENTER });
          return;
        }
      } catch (err) {
        console.log(err)
        toast.error(`${err.responce.data.message}`, { position: toast.POSITION.TOP_CENTER });
        return;
      }
    }
  }

  return (
    <div>
      <div className="modal fade" id={(editCategory === true ? "exampleModal" : "realModal")} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign: 'center' }}>
                <div>
                  <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Change Password</h3>
                </div>
              </div>
              <br></br>
              <div style={{ textAlign: 'center' }}>
                <ToastContainer />
                <label>
                  <img className='key_lock' src={lock_key} />
                  <input type="password" placeholder="Enter Old Password" className='inputs' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>
                  <img className='key_lock' src={lock_key} />
                  <input type="password" placeholder="Enter new Password" className='inputs'
                    value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <label>
                  <img className='key_lock' src={lock_key} />
                  <input type="password" placeholder="confirm New Password" className='inputs'
                    value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}></input>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="Change password" className='inputs2' onClick={handlechangepassword}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting_popUp
