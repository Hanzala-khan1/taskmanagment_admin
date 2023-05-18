import React from 'react'
import man from '../../assets/svg/man.svg'
import dot from '../../assets/svg/dot.svg'
import '../project/projects.css'
import { Link } from 'react-router-dom'
import './test.css'
import Card from './Card'
import Task_details from './Task_details'
function Test(data) {
    const card_ALL = data.data
    return (
        <div>

            <div className='col-lg-3 col-md-6 col-sm-12 ' style={{ flex: "1" }}>
                <div className='main-card'>
                    <div className="card">
                        <div className="card-body" >
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>New Projects</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>

                        {card_ALL.length > 0 ? (
                            card_ALL.map((row) => {
                                return <Card data={row} key={row._id} />;
                            })
                        ) : (
                            <div>
                                <div className='div1 pad'>
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

export default Test
