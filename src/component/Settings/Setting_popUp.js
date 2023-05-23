import React from 'react'
import './Setting_popUp.css'
import lock_key from '../../assets/svg/lock-key.svg'
function Setting_popUp({ editCategory }) {
  console.log("Abcd")
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
                <label>
                  <img className='key_lock' src={lock_key} />
                  <input type="password" placeholder="Enter Old Password" className='inputs'></input>
                </label>
                <br></br>
                <br></br>
                <label>
                  <img className='key_lock' src={lock_key} />
                  <input type="password" placeholder="Enter New Password" className='inputs'></input>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="Send Confirmation Email" className='inputs2'></input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting_popUp
