import React from 'react'
import Card from './Card'
import man from '../../assets/svg/man.svg'
import dot from '../../assets/svg/dot.svg'
import '../project/projects.css'
import './test.css'
function Completed(data) {
    const card_completed = data.data
    return (
        <div>
            {/* Completed card */}

            <div className='col-lg-3 col-md-6 col-sm-12 ' style={{ flex: "1" }}>
                <div className=' main-card' >
                    <div className="card">
                        <div className="card-body">
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>Completed</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>

                        {card_completed.length > 0 ? (
                            card_completed.map((row) => {
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
    )
}

export default Completed
