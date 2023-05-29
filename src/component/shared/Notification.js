import React from 'react';
import './notification.css';
import notify from '../../assets/svg/notification_blue.svg';
import lock from '../../assets/svg/lock_red.svg';
import email from '../../assets/svg/email_black.svg';
import Nav from './Nav';

function Notification() {
    const notifications = [
        {
            msg: 'You have new 3',
            time: "11:00 PM"
        }
    ];

    return (
        <div>
            <div>
                <Nav />
            </div>

            <div className='main_noti_div'>
                <div className='notification_heading'>
                    <h2 className='head_margin'>Notification</h2>
                    <hr style={{marginRight:'12rem'}} />
                </div>

                <div style={{marginLeft:'5px'}}>
                    <div className='inline_class'>
                        <div className='inner'>
                            <img className='svg_size' src={notify} alt="notification" />
                            <p >{notifications.msg} <span style={{ color: '#FF7F50' }}>Task Pending</span></p>
                        </div>
                        <p>{notifications[0].time}</p>
                    </div>
                    <hr className='hr_space' />

                    <div className='inline_class'>
                        <div className='inner'>
                            <img className='svg_size' src={lock} alt="lock" />
                            <p>Password Changed Successfully</p>
                        </div>
                        <p>{notifications[0].time}</p>

                    </div>
                    <hr className='hr_space' />
                    <div className='inline_class'>
                        <div className='inner'>
                            <img className='svg_size' src={email} alt="email" />
                            <p>Email Successfully Sent.</p>
                        </div>
                        <p>{notifications[0].time}</p>
                    </div>
                    <hr className='hr_space' />
                    <div className='inline_class'>
                        <div className='inner'>
                            <img className='svg_size' src={lock} alt="lock" />
                            <p>Password Changed Successfully.</p>
                        </div>
                        <p>{notifications[0].time}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
