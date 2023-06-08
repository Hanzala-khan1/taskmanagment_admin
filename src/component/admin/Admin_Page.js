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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      Loginclick(event);
    }
  };


  const Loginclick = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginform
      if (!email || !password) {
        // setError(true);
        // setErrorvalue("Please fill in both email and password fields.");
        // if (error) {
        toast.error(`Please fill in both email and password fields.`, { position: toast.POSITION.TOP_CENTER });
        return;
        // }
        // setError(false);
      }
      const res = await axios({
        method: 'post',
        url: `${API_HOST}/user/loginUser`,
        data: {
          email: email,
          password: password
        }
      });

      // console.log(res.data.data)

      dispatch(Adduser(res.data.data))
      navigate("/project")
    } catch (err) {
      // setError(true)
      // setErrorvalue(err.response.data.message)
      // if (error) {
      toast.error(`invalid email or password`, { position: toast.POSITION.TOP_CENTER });
      return;
      // }
      // setError(false);
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
      <div className='main-div'>
        <div>
          <label className="name-label  text-center">
            <img className="icon " src={email} />
            <input
              onKeyPress={handleKeyPress}
              type="text"
              id="email"
              value={loginform.email}
              onChange={loginformchange}
              placeholder="Email"
              required
            />

          </label>
        </div>
        <div>
          <label className="name-label  text-center">
            <img className="icon" src={lock} />
            <input
              onKeyPress={handleKeyPress}
              type="password"
              id="password"
              value={loginform.password}
              onChange={loginformchange}
              placeholder="Password"
              required
            />
          </label>
        </div>
      </div>
      <img className='half' src={half} />
      <a className='forget_pass'>Forget Password?</a>
      <label className='login-button'>
        <button onClick={Loginclick}>Login</button>
      </label>
      <ToastContainer />

    </div>
  )
}

export default Admin_Page
