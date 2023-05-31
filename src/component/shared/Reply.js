import React from 'react'
import './reply.css'
import man from '../../assets/svg/man.svg'
import like from '../../assets/svg/like.png'
import image from '../../assets/svg/testimg.jpg'
import select from '../../assets/svg/menu_button.svg'

function Reply({ reply }) {
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrr", reply)
    return (
        <div style={{ marginLeft: '7.5rem', marginTop: '25px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={image} />
                <div >
                    <h5 style={{ fontWeight: 'bold' }}>Name</h5>
                    <p>{reply.comment}</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <img src={like} />
                        <a >
                            Like
                        </a>
                    </div>

                </div>

                <div className="dropdown">
                    <img style={{ marginLeft: '750px' }} src={select} alt="Select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reply
