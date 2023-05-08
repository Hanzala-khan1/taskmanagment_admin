import React from 'react'
import man from '../../assets/svg/man.svg'
import dot from '../../assets/svg/dot.svg'
import '../project/projects.css'
import { Link } from 'react-router-dom'
import './test.css'
import Card from './Card'
import Task_details from './Task_details'
function Test() {
    let carder = [
        {
            name: "Zeshan",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "High",
            time: '08hr.23m',
            intro: '',
            date: ''
        },
        {
            name: "Yasir",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "Mid",
            time: '01hr.13m',
            intro: '',
            date: ''
        },
        {
            name: "uayfgauy",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "Low",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
    ]
    console.log(carder.length)
    return (
        <div>

            <div className='col-lg-3 col-md-6 col-sm-12 '>
                <div className=' main-card'>
                    <div class="card">
                        <div class="card-body">
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>New Projects</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>

                        {carder.map((row) => {
                            return <Card row={row} key={row.name} />
                        })}

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Test
