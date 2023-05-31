import React from 'react';
import './Attachment_screen.css';
import back_arrow from '../../assets/svg/back-arrow.svg';
import pdf from '../../assets/svg/pdf.svg';
import attach from '../../assets/svg/Attachment1.PDF.svg';
import dot from '../../assets/svg/dot.svg';
import img from '../../assets/svg/img.svg';
import myImg from '../../assets/svg/Myimage.png.svg';

function Attachment_screen({ data, handleAttachment }) {

    return (
        <div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ width: '100%' }}>
                    <div className="modal-content" style={{ width: '100%', height: '570px' }}>
                        <div className="modal-header" style={{ marginLeft: '3rem' }}>
                            <h5 className="modal-title attachment-h" id="exampleModalLabel"> <img src={back_arrow} alt="Back Arrow" /> Attachment</h5>
                            <button type="button" className="close"
                                style={{ marginTop: '-24px' }}
                                data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row" style={{ marginLeft: '2rem', marginRight: '4rem' }}>
                            {data.length > 0 ?
                                (data.map((item, index) => (
                                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                                        <div className="pdf-div">
                                            {item.type === 'image' ? (
                                                <>
                                                    <img src={img} alt="Image" />
                                                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                                                        <p>{item.filename}</p>
                                                    </a>
                                                    <div class="dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src={dot} alt="Dot" />
                                                        </button>
                                                        <div class="dropdown-menu"
                                                            aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item view-option" href={item.path}>View</a>
                                                            <a class="dropdown-item delete-option" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={pdf} alt="PDF" />
                                                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                                                        <p>{item.filename}</p>
                                                    </a>

                                                    <div class="dropdown">
                                                        <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src={dot} alt="Dot" />
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item view-option" href={item.path}>View</a>
                                                            <a class="dropdown-item delete-option" href="#">Delete</a>
                                                        </div>
                                                    </div>


                                                </>
                                            )}
                                        </div>
                                    </div>
                                )))
                                : (
                                    <div>
                                        <div className='div1 pad' style={{ height: "100%", width: "40vw" }}>
                                            <div className='d-flex center justify'>
                                                <div className='d-flex center ' style={{ gap: '12px' }}>

                                                    <h5>No available attachments to show </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                className='back-button '
                                data-dismiss="modal"
                                aria-label="Close"
                                aria-hidden="true"
                                type='button'
                                onClick={() => handleAttachment()}
                            >Back to Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attachment_screen;
