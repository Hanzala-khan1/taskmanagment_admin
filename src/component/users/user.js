import React from 'react'
import Nav from '../shared/Nav'
import Lower_nav from '../shared/Lower_nav'
import search from '../../assets/svg/search.svg'
import Delete from '../../assets/svg/delete.png'
import Dot from '../../assets/svg/dot.svg'
import style from './user.module.css'
import man from '../../assets/svg/man.svg'
import UserButtons from './userButtons'
// import admin from '../../component/admin/admin.css'
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
            dotImg: Dot,
            userImg:man
        },
        {
            name: "Imran",
            email: "imrankha122@gmail.com",
            phone: "234567",
            status: 'Fired',
            Duration: '12 mint ago',
            deleteImg: Delete,
            dotImg: Dot,
            userImg:man
        },
        {
            name: "Irfan",
            email: "irfankha21@gmail.com",
            phone: "345678",
            status: 'Active',
            Duration: '20 mint ago',
            deleteImg: Delete,
            dotImg: Dot,
            userImg:man
        }
    ]
    // console.log(user);
    return (
        <div>
            <div>
                <div>
                    <Nav />
                </div>
                <div className='middle'>
                    <Lower_nav /> 
                    <UserButtons />
                </div>
            </div>
            <br></br>
            <label className={`${style.search_label} ${style.mar}`}>
                <img className={style.search_svg} src={search} />
                <input className={style.search_box} placeholder='Search user by email, Username....' type="search" />
            </label>
            <div className={style.mar}>
                <table className="table">
                    <tbody>
                        {users.map((user) => {
                            return <UserData key={user.name} user={user} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
