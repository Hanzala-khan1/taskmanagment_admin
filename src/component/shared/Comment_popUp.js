import React from 'react'
import man from '../../assets/svg/man.svg'
import './Comment_popUp.css'
import Comment from './Comment.js'
import Reply from './Reply.js'
function Comment_popUp({ data }) {

    return (
        <div style={{ overflowY: 'hidden' }}>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog custom-modal-dialog" role="document" style={{ top: '54px', width: '100%' }} >
                    <div className="modal-content" style={{ width: '100%' }} >
                        <button style={{ marginLeft: '97%' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-header " style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', gap: '15px', whiteSpace: 'nowrap', alignItems: 'center' }}>
                                <h5 className="modal-title" id="exampleModalLabel"><img style={{ width: '45px', height: '45px', borderRadius: '50%' }} src={man} />
                                </h5>
                                <input className='comment-input' type="text" placeholder='Type comment' />
                            </div>

                        </div>
                        <div className="modal-body">
                            {data.length > 0 ? (
                                data.map((comment) => {
                                    return (
                                        <div key={comment.id}>
                                            <Comment Comment={comment} />
                                            {comment.replies.length > 0 ? (
                                                <div>
                                                    {comment.replies.map((reply) => {
                                                        return (
                                                            <Reply key={reply.id} reply={reply} />
                                                        )
                                                    })}
                                                    <div style={{ display: 'flex', gap: '15px', whiteSpace: 'nowrap', alignItems: 'center', marginTop: '15px', marginLeft: "70px" }}>
                                                        <h5 className="modal-title" id="exampleModalLabel"><img style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={man} />
                                                        </h5>
                                                        <input className='reply-input' type="text" placeholder='Type comment' />
                                                    </div>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <div>
                                    <div className="div1 pad">
                                        <div className="d-flex center justify">
                                            <div className="d-flex center" style={{ gap: '12px' }}>
                                                <h5>No available comments to show</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comment_popUp
