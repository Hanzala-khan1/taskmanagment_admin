import React from 'react'
import Nav from '../shared/Nav'
import Lower_nav from '../shared/Lower_nav'
import search from '../../assets/svg/search.svg'
import Delete from '../../assets/svg/delete.png'
import Dot from '../../assets/svg/dot.svg'
import './user.css'
import UserData from './userData'
const User = () => {
    let users = [
        {
            name: "Zeshan",
            email: "zeeshankha@gmail.com",
            phone: "123456",
            status: 'Active',
            Duration: '08 mint ago',
            deleteImg: Delete,
            dotImg: Dot
        },
        {
            name: "Imran",
            email: "imrankha122@gmail.com",
            phone: "234567",
            status: 'Fired',
            Duration: '12 mint ago',
            deleteImg: Delete,
            dotImg: Dot
        },
        {
            name: "Irfan",
            email: "irfankha21@gmail.com",
            phone: "345678",
            status: 'Active',
            Duration: '20 mint ago',
            deleteImg: Delete,
            dotImg: Dot
        }
    ]
    // console.log(user);
    return (
        <div>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <Lower_nav />
                </div>
            </div>
            <div className='searchBar mar'>
                <div className="input-group">
                    <div className="form-outline">
                        <img src={search} />
                        <input id="search-focus" type="search" className="form-control" />
                        <label className="form-label" for="form1"></label>
                    </div>
                </div>
            </div>
            <table class="table mar">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {users.map((user)=>{
                return <UserData key={user.name} user={user} />
                  })}
                </tbody>
            </table>
        </div>
    )
}

export default User
