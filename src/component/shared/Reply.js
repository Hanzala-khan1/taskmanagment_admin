import React from 'react'
import './reply.css'
import man from '../../assets/svg/man.svg'
import like from '../../assets/svg/like.png'
import image from '../../assets/svg/testimg.jpg'
import select from '../../assets/svg/menu_button.svg'

function Reply() {
    return (
        <div style={{ marginLeft: '7.5rem', marginTop: '25px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={image} />
                <div >
                    <h5 style={{ fontWeight: 'bold' }}>Name</h5>
                    <p>Comment reply .......</p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <img src={like} />
                        <a >
                            Like
                        </a>
                    </div>

                </div>

                <div className="dropdown">
                    <img style={{ marginLeft: '672px' }} src={select} alt="Select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Edit</a>
                        <a className="dropdown-item" href="#">Delete</a>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '15px', whiteSpace: 'nowrap', alignItems: 'center', marginTop: '15px' }}>
                <h5 className="modal-title" id="exampleModalLabel"><img style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={man} />
                </h5>
                <input className='reply-input' type="text" placeholder='Type comment' />
            </div>
        </div>
    )
}

export default Reply
