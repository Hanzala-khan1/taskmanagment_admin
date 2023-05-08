import React from 'react'
import Card from './Card'
import '../project/projects.css'
import { Link } from 'react-router-dom'
import './test.css'
function To_do() {
    let todo = [
        {
            name: "Zeshan",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "Hugh",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
        {
            name: "Yasir",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "high",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
        {
            name: "Honey",
            description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate meaningful content.",
            value: "low",
            time: '11hr.23m',
            intro: '',
            date: ''
        },
    ]
    return (
        <div>
            {/* In progress card */}
            <div className='col-lg-3 col-md-6 col-sm-12 '>
                <div className=' main-card'>
                    <div class="card">
                        <div class="card-body">
                            <div className='d-flex h-p justify-space'>
                                <h6 style={{ float: 'left', marginTop: '0' }}>To Do</h6>
                                <p style={{ float: 'right' }}>View All</p>
                            </div>
                        </div>

                        {todo.map((row) => {
                            return <Card row={row} key={row.name} />

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default To_do
