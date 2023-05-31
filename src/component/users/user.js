import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import { useSelector } from 'react-redux'
const User = () => {
    const [userdata, setUserdata] = useState([])
    const user = useSelector(state => state.loginUser.user)
    const token = user.token

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const res = await axios({
            method: 'get',
            url: `${API_HOST}/user/getAll`,
            data: {},
            headers: {
                token: token
            }
        })
        setUserdata(res.data.data)
    }
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
                        {userdata.map((user) => {
                            return <UserData key={userdata._id} user={user} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
