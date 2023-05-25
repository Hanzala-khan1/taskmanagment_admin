import React, { useState } from 'react'
import './details_screen.css'
import done from '../../assets/svg/done.svg'
import man from '../../assets/svg/man.svg'
import attachment from '../../assets/svg/attachment.svg'

function Details_screen({handleDetails}) {

    const date="15 Oct 22";
    const day=date.slice(0,2);
    const month=date.slice(3,6);
    const year=date.slice(7); 

    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" style={{ width: '100%' }}>
                    <div class="modal-content" style={{ width: '100%', height:'570px' }}>
                        
                        <div class="modal-header" style={{marginTop:'25px'}}>
                            <h5
                                style={{ fontWeight: '700', fontSize: '16px',whiteSpace:'nowrap' }}
                                class="modal-title header-h5" id="exampleModalLabel">Task Details   <img style={{ width: '15px' }} src={done} /></h5>
                            <div className='space'>
                                <p className='header-p'>Time</p>
                                <button className='header-button' type='button'>
                                View Attachments </button>  
                                <img style={{width:'14px'}} src={attachment} />
                            </div>
                            <button type="button" style={{marginTop:'-38px'}} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body"  style={{marginLeft:'2rem'}}>
                            <div className='content-gap'>
                                <img src={man} />
                                <div >
                                    <h4 className='name-h'> Project Name</h4>
                                    <p className='name-p'>This is task details</p>
                                </div>
                            </div>
                            <div className='description'>
                                <h5 className='font'>Description</h5>
                                <p style={{width:'94%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed ut purus a neque varius Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit. Sed ut purus a neque varius 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed ut purus a neque varius Lorem ipsum dolor sit amet,
                                 consectetur adipiscing elit. Sed ut purus a neque varius 
                                </p>
                                <h5 className='font' style={{marginTop: '30px'}}>Due Date</h5>
                                <p style={{display:'flex',gap:'10px',marginTop:'18px'}}>
                                <span style={{marginTop:'12px'}}>{day}</span>
                                <span className='span-month'>{month}</span> 
                                <span style={{marginTop:'12px'}}>{year}</span>
                                </p>
                                <div className='content-gap' style={{marginTop: '30px'}}>
                                    <button className='add-button' type='button'>Add Comment</button>
                                    <button className='view-button' type='button'>View Comments</button>
                                </div>
                                <div className='content-gap' style={{justifyContent: 'center',marginTop: '50px'}}>
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
