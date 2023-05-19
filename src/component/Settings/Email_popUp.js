import React from 'react'
import './Setting_popUp.css'
import email from '../../assets/svg/email.svg'
export default function Email_popUp(editEmail) {
    return (
        <div>
            <div>
                <div className="modal fade" id={(editEmail === true ? "exampleModal" : "realModal")} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div style={{ textAlign: 'center' }}>
                                    <div>
                                        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Change Email</h3>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ textAlign: 'center' }}>
                                    <label>
                                        <img className='key_lock' src={email} />
                                        <input type="email" placeholder="Enter Email" className='inputs'></input>
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <label>
                                        <img className='key_lock' src={email} />
                                        <input type="email" placeholder="Enter New Email" className='inputs'></input>
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <input type="submit" value="Send Confirmation Email" className='inputs2'></input>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
