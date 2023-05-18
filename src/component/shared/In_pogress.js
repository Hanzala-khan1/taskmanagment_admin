import React from 'react'
import Card from './Card'
import '../project/projects.css'
import { Link } from 'react-router-dom'
import './test.css'
function In_pogress(data) {
    const card_pending = data.data;

    return (
        <div>
            {/* In progress card */}
            <div className='col-lg-3 col-md-6 col-sm-12 overflow-scroll' style={{ flex: "1" }}>
                <div className='main-card' style={{ flex: "1" }}>
                    <div className="card">
                        <div className="card-body">
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>In Progress</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>
                        {card_pending.length > 0 ? (
                            card_pending.map((row) => {
                                return <Card data={row} key={row._id} />;
                            })
                        ) : (
                            <div>
                                <div className='div1 pad' style={{ height: "100%" }}>
                                    <div className='d-flex center justify'>
                                        <div className='d-flex center ' style={{ gap: '12px' }}>

                                            <h5>No available Content to show </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default In_pogress
