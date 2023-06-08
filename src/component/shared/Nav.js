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


    const [searchBarVisible, setSearchBarVisible] = useState(false);

    const toggleSearchBar = () => {
        setSearchBarVisible(!searchBarVisible);
    };


    const user = useSelector(state => state.loginUser.user)
    const token = user.token
    const Profile = user.info

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
    console.log("Abc", user.info.image)
    return (
        <div>
            <div>
                <div>
                    <ul className='nav-ul'>
                        <li className='nav_heading'>
                            <h1 className='logo1'>
                                <span style={{ color: '#004064' }}>D</span><span style={{ color: '#171C1F!important' }}>codax</span></h1>
                        </li>
                        <li className='nav_heading'
                            style={{ padding: '22px 30px 5px 35px' }}>
                            <Link to={"/project"}> Work </Link>
                        </li>
                        <li className='nav_heading'
                            style={{ padding: '22px 30px 5px 15px' }}>
                            <Link to={"/Settings"} style={{ color: 'rgba(0, 0, 0, 0.38)' }}> Settings</Link>
                        </li>
                    </ul>
                    <ul className='nav-li' style={{ alignItems: 'center' }}>
                        {searchBarVisible && (
                            <li style={{ padding: '20px' }}>
                                <input className='seach_bar' type="text" placeholder="Search.." />
                            </li>
                        )}
                        <li style={{ padding: '20px' }} onClick={toggleSearchBar}>
                            <img src={search} />
                        </li>


                        <li style={{ padding: '20px' }}>
                            <a href="/notification">
                                <img src={notification} /></a></li>
                        <li onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            style={{ padding: '20px' }}
                        ><img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={Profile} />
                        </li>
                        <li style={{ padding: '20px' }}><img src={arrow}
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
                                >Logout</a>                            </div></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Nav
