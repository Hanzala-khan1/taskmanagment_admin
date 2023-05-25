import React from 'react'
import './comment.css'
import man from '../../assets/svg/man.svg'
import reply from '../../assets/svg/reply-icon.svg'
import like from '../../assets/svg/like-icon.svg'
import menu from '../../assets/svg/menu_button.svg'
function Comment() {
    return (
        <div style={{marginLeft:'3rem'}}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <img style={{width:'40px', height:'40px', borderRadius:'50%'}} src={man} />
                <div >
                    <h5 style={{ fontWeight: 'bold' }}>Name</h5>
                    <p>Comment</p>
                        <div style={{display:'flex',gap:'10px'}}>
                            <img src={reply} />
                            <a
                                onClick>Reply</a>
                            <img src={like} />
                            <a >
                                Like
                            </a>
                        </div>
                        
                </div>
                <img style={{marginLeft:'75%'}} src={menu} />
            </div>
        </div>
    )
}
export default Comment
