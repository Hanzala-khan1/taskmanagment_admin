import React from 'react'
import './admin.css'
import { useNavigate } from "react-router-dom";
import email from '../../assets/svg/email.svg'
import lock from '../../assets/svg/lock.svg'
import half from '../../assets/svg/half.svg'
function Admin_Page() {
  const navigate = useNavigate();
  const loginclick = () => {
    navigate('/project');
  }
  return (
    <div className='header'>
      <div>
        <h1 className='logo'> <span style={{ color: '#004064' }}>D</span><span style={{ color: '#171C1F!important' }}>codax</span></h1>
      </div>
      <div>
        <h3 className='h3'>Welcome Mrs. Donshay</h3>
      </div>
      <div>
        <p className='p'>Login to continue using </p>
      </div>

      <div className='main-div'>
        <div>
          <label className="name-label  text-center">
            <img className="icon " src={email} />
            <input type="text" placeholder="Email" />
          </label>
        </div>
        <div>
          <label className="name-label  text-center">
            <img className="icon" src={lock} />
            <input type="password" placeholder="Password" />
          </label>
        </div>
      </div>
      <img className='half' src={half} />
      <a className='forget_pass'>Forget Password?</a>
      <label className='login-button'>
        <button onClick={loginclick}>Login</button>
      </label>

    </div>
  )
}

export default Admin_Page
