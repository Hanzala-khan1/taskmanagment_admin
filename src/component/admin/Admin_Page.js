import React, { useState } from 'react'
import './admin.css';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import email from '../../assets/svg/email.svg'
import lock from '../../assets/svg/lock.svg'
import half from '../../assets/svg/half.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Adduser } from '../../redux/actions/userlogin';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
function Admin_Page() {

  const [error, setError] = useState(false)
  const [errorvalue, setErrorvalue] = useState("")
  const [loginform, setLoginform] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const loginformchange = (e) => {
    setLoginform(
      (prev) => ({ ...prev, [e.target.id]: e.target.value })
    )
  }
  console.log(loginform)
  const Loginclick = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginform
      if (!email || !password) {
        setError(true);
        setErrorvalue("Please fill in both email and password fields.");
        return;
      }
      const res = await axios({
        method: 'post',
        url: `${API_HOST}/user/loginUser`,
        data: {
          email: email,
          password: password
        }
      });
      console.log(res.data.data)
      dispatch(Adduser(res.data.data))
      navigate("/project")
    } catch (err) {
      setError(true)
      // setErrorvalue(err.response.data.message)
      console.log(err)
    }
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
      {error && <div className='p' style={{ color: "red" }}>{errorvalue}</div>}
      <div className='main-div'>
        <div>
          <label className="name-label  text-center">
            <img className="icon " src={email} />
            <input
              type="text"
              id="email"
              value={loginform.email}
              onChange={loginformchange}
              placeholder="Email" />
          </label>
        </div>
        <div>
          <label className="name-label  text-center">
            <img className="icon" src={lock} />
            <input
              type="password"
              id="password"
              value={loginform.password}
              onChange={loginformchange}
              placeholder="Password" />
          </label>
        </div>
      </div>
      <img className='half' src={half} />
      <a className='forget_pass'>Forget Password?</a>
      <label className='login-button'>
        <button onClick={Loginclick}>Login</button>
      </label>

    </div>
  )
}

export default Admin_Page
