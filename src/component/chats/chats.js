import React from 'react'
import Nav from '../shared/Nav'
import chat from './chat.module.css'
import Lower_nav from '../shared/Lower_nav'
import man from '../../assets/svg/man.svg'
import Chat_box from './Chat_box'

const Chats = () => {
    const user = [
        {
            'img': man,
            'name': "Zeeshan",
            "msg": 'Hello there?',
            "time": '9.00 PM'
        }
    ]
    return (
        <div>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <Lower_nav data={"Chats"} />
                </div>
            </div>

            <br></br>
            <div className={chat.chat_main}>

                <div className={chat.user_list}>
                    <div className={chat.user_list_div}>
                        <h5>All Messages</h5>
                        <p>View All</p>
                    </div>
                    <div>
                        {user.map((item, index) => {
                            return (
                                <div style={{ marginLeft: '2rem' }}>
                                    <div className={chat.list} >
                                        <img className={chat.user_image} src={item.img} />

                                        <div style={{ paddingTop: '10px', paddingLeft: '10px', width: '100%' }} className={chat.lists} key={index}>

                                            <div className={chat.user_name}>
                                                <h5 className={chat.name_h}>{item.name}</h5>
                                                <p className={chat.time_p}>{item.time}</p>
                                            </div>


                                            <p>{item.msg}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div style={{ width: '75%' }}>
                    <Chat_box />
                </div>
            </div>
        </div>
    )
}

export default Chats
