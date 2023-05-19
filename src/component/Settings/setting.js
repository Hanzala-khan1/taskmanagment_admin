import React, { useState } from 'react'
import Nav from '../shared/Nav'
import './setting.css'
import lock from '../../assets/svg/lock.svg'
import user from '../../assets/svg/user.svg'
import on_Off from '../../assets/svg/notification_onOff.svg'
import edit from '../../assets/svg/edit-profile.svg'
import Setting_popUp from './Setting_popUp.js'
const Setting = () => {
    const [popup, setPopup] = useState(false);
    const handlePassword = () => {
        setPopup(!popup);
    }
    console.log(popup);
    return (
        <div>
            <div>
                <Nav />
            </div>

            <div className='left_right'>
                <h2 className='heading'>Settings</h2>
                <hr style={{ marginTop: '12rem' }} className='left_right'></hr>
                <h4 style={{ marginLeft: "3rem" }} className='bold'>Security</h4>
                <hr className='hr-tag'></hr>
                <br></br>
                <div className='width left_right'     >
                    <a className='anchor' style={{ width: "72%" }}
                        data-toggle="modal" data-target="#exampleModal"
                        onClick={handlePassword}>Change Password</a>
                    {popup && <Setting_popUp editCategory={true} />}
                    <img src={lock} />

                </div>
                <br></br>
                <hr className='inner-hr'></hr>
                <br></br>
                <div className='width left_right'>
                    <a className='anchor' style={{ width: "72%" }}
                        onChange={handlePassword}>Change Email</a>
                    <img style={{ width: "16px" }} src={user} />
                </div>
            </div>
            <br></br>
            <br></br>
            <div className='left_right'>
                <h4 style={{ marginLeft: "3rem" }} className='bold'>General</h4>
                <hr className='hr-tag'></hr>
                <br></br>
                <div className='width left_right'>
                    <a className='anchor' style={{ width: "72%" }}
                        onChange={handlePassword}>Notification</a>
                    <img style={{ width: "20px" }} src={on_Off} />
                </div>
                <br></br>
                <hr className='inner-hr'></hr>
                <br></br>
                <div className='width left_right'>
                    <a className='anchor' style={{ width: "72%" }}
                        onChange={handlePassword}>Change Password</a>
                    <img style={{ width: "16px" }} src={edit} />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Setting
