import React, { useState } from 'react'
import './details_screen.css'
import done from '../../assets/svg/done.svg'
import man from '../../assets/svg/man.svg'
import attachment from '../../assets/svg/attachment.svg'
import Comment_popUp from './Comment_popUp'

function Details_screen({ handleDetails, data }) {
    const [comment, setComment] = useState(false);
    const handleComment = () => {
        setComment(!comment);
    }
    const date = data.created_at;
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(2, 4);

    return (
        <div>
            <div class="modal fade" id="exampleModalDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" style={{ width: '100%' }}>
                    <div class="modal-content" style={{ width: '100%', height: '570px' }}>

                        <div class="modal-header" style={{ marginTop: '25px' }}>
                            <h5
                                style={{ fontWeight: '700', fontSize: '16px', whiteSpace: 'nowrap' }}
                                class="modal-title header-h5" id="exampleModalLabel">Task Details   <img style={{ width: '15px' }} src={done} /></h5>
                            <div className='space'>
                                <p className='header-p'>Time</p>
                                <button className='header-button' type='button'>
                                    View Attachments </button>
                                <img style={{ width: '14px' }} src={attachment} />
                            </div>
                            <button type="button" style={{ marginTop: '-38px' }} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style={{ marginLeft: '2rem' }}>
                            <div className='content-gap'>
                                <img src={data.user_id.image}
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%"
                                    }}
                                />
                                <div >
                                    <h4 className='name-h'> {data.title}</h4>
                                    {/* <p className='name-p'>{data.title}</p> */}
                                </div>
                            </div>
                            <div className='description'>
                                <h5 className='font'>Description</h5>
                                <p style={{ width: '94%' }}>
                                    {data.description}
                                </p>
                                <h5 className='font' style={{ marginTop: '30px' }}>Due Date</h5>
                                <p style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
                                    <span style={{ marginTop: '12px' }}>{day}</span>
                                    <span className='span-month'>{month}</span>
                                    <span style={{ marginTop: '12px' }}>{year}</span>
                                </p>
                                {/* <div className='content-gap' style={{ marginTop: '30px' }}>
                                    <a style={{ margin: 'auto 0', textDecoration: 'underline' }}
                                        data-toggle="modal" data-target="#exampleModal"
                                        onClick={handleComment}
                                    > <button className='view-button' type='button'>View Comments</button></a>
                                </div>
                                {comment && <Comment_popUp data={data.Comments} />} */}
                                <div className='content-gap' style={{ justifyContent: 'center', marginTop: '50px' }}>
                                    <button className='mark-button' type='button'> Mark Complete</button>
                                    <button className='send-button' type='button'> Send Files</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details_screen
