import React from 'react'
import Card from './Card'
import man from '../../assets/svg/man.svg'
import dot from '../../assets/svg/dot.svg'
import '../project/projects.css'
import './test.css'
function Completed() {
    let complete = [
        {
            name: "Web",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "Hugh",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
        {
            name: "App",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "high",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
        {
            name: "Domain",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "low",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
    ]
    return (
        <div>
            {/* Completed card */}

            <div className='col-lg-3 col-md-6 col-sm-12 '>
                <div className=' main-card'>
                    <div class="card">
                        <div class="card-body">
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>Completed</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>

                        {complete.map((row) => {
                            return <Card row={row} key={row.name} />

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Completed
