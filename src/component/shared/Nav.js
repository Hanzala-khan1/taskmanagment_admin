import React, { useState } from 'react'
import search from '../../assets/svg/search.svg'
import notification from '../../assets/svg/notification.svg'
import man from '../../assets/svg/man.svg'
import arrow from '../../assets/svg/arrow.svg'
import '../project/projects.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Removeuser } from '../../redux/actions/userlogin'
function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const user = useSelector(state => state.loginUser.user)
    const token = user.token
    const Profile = user.info.image

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleHover = () => {
        setIsOpen(true);
    };

    const handleLeave = () => {
        setIsOpen(false);
    };
    const handleLogin = () => {
        dispatch(Removeuser(null))
        navigate("/")
    }
    return (
        <div>
            <div>
                <div>
                    <ul className='nav-ul'>
                        <li className='nav_heading'>
                            <h1 className='logo1'>
                                <span style={{ color: '#004064' }}>D</span><span style={{ color: '#171C1F!important' }}>codax</span></h1>
                        </li>
                        <a className='active-link' style={{ color: 'rgba(0, 0, 0, 0.38)' }}>
                            <li className='nav_heading' style={{ padding: '22px 30px 5px 35px' }}><Link to={"/project"}> Work </Link></li></a>
                        <li className='nav_heading'
                            style={{ padding: '22px 30px 5px 15px' }}><Link to={"/Settings"} style={{ color: 'rgba(0, 0, 0, 0.38)' }}> Settings</Link></li>
                    </ul>
                    <ul className='nav-li' style={{ alignItems: 'center' }}>
                        <li style={{ padding: '20px' }}><img src={search} /></li>
                        <li style={{ padding: '20px' }}>
                            <a href="/notification">
                                <img src={notification} /></a></li>
                        <li onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            style={{ padding: '20px' }}
                        ><img style={{ width: '40px', height: '40px' }} src={Profile}
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            />
                            <div
                                style={{ textAlign: 'center' }}
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#action1">Change Profile Picture</a>
                                <a className="dropdown-item"
                                    href="#action2"
                                    onClick={handleLogin}
                                >Logout</a>                            </div>
                        </li>
                        <li style={{ padding: '20px' }}><img src={arrow} /></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Nav
