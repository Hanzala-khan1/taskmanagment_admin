import React, { useState } from 'react'
import './Setting_popUp.css'
import email from '../../assets/svg/email.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function Email_popUp(editEmail) {
    const [email, setEmail] = useState("");
    const [confirmemail, setConfirmEmail] = useState("")
    console.log(email, confirmemail)

    const user = useSelector((state) => state.loginUser.user);
    const id = user.info._id;
    //////////////////////////////////
    const handlechangeemail = async () => {
        if (!email || !confirmemail) {
            toast.error(`Please fill in both email and confirm Email fields.`, { position: toast.POSITION.TOP_CENTER });
            return;
            ;
        }
        else {
            try {
                if (email === confirmemail) {
                    const res = await axios({
                        method: 'put',
                        url: `${API_HOST}/user/updateUser/${id}`,
                        data: {
                            email: `${email}`
                        }
                    })
                    toast.error(`email change successfully`, { position: toast.POSITION.TOP_CENTER });
                    return;
                } else {
                    toast.error(`email doesn't match`, { position: toast.POSITION.TOP_CENTER });
                    return;
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
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
                                <ToastContainer />
                                <div style={{ textAlign: 'center' }}>
                                    <div>
                                        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Change Email</h3>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ textAlign: 'center' }}>
                                    <label>
                                        <img className='key_lock' src={email} />
                                        <input type="email" placeholder="Enter new Email" className='inputs' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <label>
                                        <img className='key_lock' src={email} />
                                        <input type="email" placeholder="confirm Email" className='inputs' value={confirmemail} onChange={(e) => setConfirmEmail(e.target.value)} required={true}></input>
                                    </label>
                                    <br></br>
                                    <br></br>
                                    <input type="submit" value="Change  Email" className='inputs2' onClick={handlechangeemail}></input>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
