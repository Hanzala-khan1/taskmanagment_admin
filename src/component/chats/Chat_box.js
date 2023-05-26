import React from 'react'
import box from './chat_box.module.css'
import send from '../../assets/svg/send.svg'
import attach from '../../assets/svg/attachment.svg'
import man from '../../assets/svg/man.svg'

function Chat_box() {
    const user = [
        {
            'msg': "hi i'm zeeshan.Frontend Developerhi i'm zeeshan.hi i'm zeeshan. hi i'm zeeshan.Frontend Developerhi i'm zeeshan.hi i'm zeeshan.hi i'm zeeshan.Frontend Developerhi i'm zeeshan.hi i'm zeeshan. ",
            'isSender': true
        },
        {
            'msg': "hi i'm zeeshan. hi i'm zeeshan. hi i'm zeeshan. hi i'm zeeshan. hi i'm zeeshan.",
            'isReceiver': false
        },
        {
            'msg': "how are you doing sir? ",
            'isSender': true
        },
        {
            'msg': "What can I do for you?",
            'isReceiver': false
        },
        {
            'msg': "how are you doing sir? ",
            'isSender': true
        },
        {
            'msg': "What can I do for you?",
            'isReceiver': false
        }
    ]

    return (
        <div>
            <div className={box.chat_box} style={{ overflow: 'auto',paddingBottom:'60px' }}>
                {user.map((item, index) => (
                    item.isSender ? (
                        <div className={box.sender} key={index}>
                            <img className={box.profile_size} src={man} alt="User Avatar" />
                            <div>
                                <p className={box.sender_p}>{item.msg}</p>
                            </div>
                        </div>
                    ) : (
                        <div className={`${box.reciever} reciever`} key={index}>

                            <div>
                                <p className={box.reciever_p}>{item.msg}</p>
                            </div>
                            <img className={box.profile_size} src={man} alt="User Avatar" />
                        </div>
                    )
                ))}

            </div>
            <div className={box.type}>
                <input className={box.type_box} style={{ position: 'fixed', bottom: '20px', overflow: 'hidden' }} type='text' placeholder='Type message here' />
                <div className={box.icons_container} >
                    <div>
                        <label htmlFor="fileInput">
                            <img src={attach} alt="Attach File" />
                        </label>
                        <input id="fileInput" type="file" style={{ display: "none" }} />
                    </div>
                    <img src={send} alt="Send Icon" />
                </div>
            </div>
        </div>
    )
}

export default Chat_box;
