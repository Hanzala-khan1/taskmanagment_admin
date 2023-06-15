import React, { useState } from 'react'
import Nav from '../shared/Nav'
import './setting.css'
import lock from '../../assets/svg/lock.svg'
import user from '../../assets/svg/user.svg'
import on_Off from '../../assets/svg/notification_onOff.svg'
import edit from '../../assets/svg/edit-profile.svg'
import Setting_popUp from './Setting_popUp.js'
import Upload_popUp from './Upload_popUp'
import Email_popUp from './Email_popUp'
const Setting = () => {
    const [popup, setPopup] = useState(false);
    const [picture, setPicture] = useState(false);
    const [email, setEmail] = useState(false);
    const handlePassword = () => {
        setPopup(!popup);
    }
    const handleUpload = () => {
        setPicture(!picture)
    }
    const handleEmail = () => {
        setEmail(!email)
    }
    console.log(popup);
    return (
        <div>
            <div>
                <Nav />
            </div>

            <div className='left_right'>
                <br></br>
                <h2 className='heading'>Settings</h2>
                <br></br>
                <hr style={{ marginTop: '12rem' }} className='left_right'></hr>
                <h4 style={{ marginLeft: "3rem" }} className='bold'>Security</h4>
                <hr className='hr-tag'></hr>
                <br></br>
                <div className='width left_right' style={{ display: 'flex' }}   >
                    <a className='anchor' style={{ width: "77%" }}
                        data-toggle="modal" data-target="#exampleModal"
                        onClick={handlePassword}>Change Password</a>
                    {popup && <Setting_popUp editCategory={true} />}
                    <img src={lock} />
                </div>
                <hr className='inner-hr'></hr>
                <br></br>
                <div className='width left_right'>
                    <a className='anchor' style={{ width: "77%" }}
                        data-toggle="modal" data-target="#realModal"
                        onClick={handleEmail}>Change Email</a>
                    <img style={{ width: "16px" }} src={user} />
                    {email && <Email_popUp editEmail={true} />}
                </div>
            </div>
            <div className='left_right'>
                <h4 style={{ marginLeft: "3rem" }} className='bold'>General</h4>
                <hr className='hr-tag'></hr>
                <br></br>
                <div className='width left_right'>
                    <a href='/notification' className='anchor' style={{ width: "77%" }}
                    >Notification</a>
                    <img style={{ width: "20px" }} src={on_Off} />
                </div>
                <hr className='inner-hr'></hr>
                <br></br>
                <div className='width left_right'>
                    <a className='anchor' style={{ width: "77%" }}
                        data-toggle="modal" data-target="#myModal"
                        onClick={handleUpload}>Change Profile Picture</a>
                    <img style={{ width: "16px" }} src={edit} />
                    {picture && <Upload_popUp editPicture={true} />}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Setting
