import React, { useState } from 'react'
import search from '../../assets/svg/search.svg'
import notification from '../../assets/svg/notification.svg'
import man from '../../assets/svg/man.svg'
import arrow from '../../assets/svg/arrow.svg'
import '../project/projects.css'
import { Link } from 'react-router-dom'
function Nav() {
    const [dropdown,setDropdown]= useState(false)
    const handlDropdown=()=>{
        setDropdown(!dropdown)
    }
    return (
        <div>
            <div>
                <div>
                    <ul className='nav-ul'>
                        <li><h1 className='logo1'> <span style={{ color: '#004064' }}>LO</span><span style={{ color: '#171C1F!important' }}>GO</span></h1></li>
                        <a className='active-link'><li style={{ padding: '20px' }}><Link to={"/project"}> Work </Link></li></a>
                        <li style={{ padding: '20px' }}><Link to={"/Settings"}> Settings</Link></li>
                    </ul>
                    <ul className='nav-li' style={{ alignItems: 'center' }}>
                        <li style={{ padding: '20px' }}><img src={search} /></li>
                        <li style={{ padding: '20px' }}><img src={notification} /></li>
                        <li onClick={handlDropdown} style={{ padding: '20px' }}><img src={man} />
                        <ul className="dropdown-menu">
                                <li><a href="#" data-hover=" ">one</a></li>
                                <li><a href="3" data-hover=" ">two</a></li>
                            </ul>
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
