import React, { useEffect, useState } from 'react'
import './categories.css'
import Lower_nav from '../shared/Lower_nav'
import Nav from '../shared/Nav'

import Filter from '../shared/Filter'
import globe from '../../assets/svg/globe.png'
import Delete from '../../assets/svg/delete.png'
import Edit from '../../assets/svg/edit.png'
import Category_popUp from '../shared/Category_popUp'
import axios from 'axios'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import { useSelector } from 'react-redux'
const Categories = () => {
    const [categories, setCategories] = useState([])
    const [categoriesdata, setCategoriesdata] = useState("")
    const user = useSelector(state => state.loginUser.user)
    const token = user.token
    useEffect(() => {
        getcategories()
    })
    const getcategories = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/category/getcategory`,
                data: {},
                headers: {
                    "Content-Type": '',
                    token: token
                }
            })
            setCategories(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const Addcategories = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/category/addcategory`,
                data: {
                    category_title: categoriesdata
                },
                headers: {
                    "Content-Type": '',
                    token: token
                }
            })
            setCategories(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const Deletecategories = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/category/deletecategory`,
                data: {
                    category_title: categoriesdata
                },
                headers: {
                    "Content-Type": '',
                    token: token
                }
            })
            setCategories(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    const Updatecategories = async () => {
        try {
            const res = await axios({
                method: 'get',
                url: `${API_HOST}/category/updatecategory`,
                data: {
                    category_title: categoriesdata
                },
                headers: {
                    "Content-Type": '',
                    token: token
                }
            })
            setCategories(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div>
                <Lower_nav />
                <Filter />
            </div>
            <div>
                <div className='categories'>

                    <div className='top-x'>
                        <h4>Categories</h4>
                        <Category_popUp />
                    </div>
                    <div style={{ marginRight: '6rem' }}>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex category'>
                            <div>
                                <img src={globe} />
                            </div>
                            <div className='top-gap'>
                                <h5>Web Development</h5>
                                <div>
                                    <img src={Delete} /> <a>Delete</a> <img src={Edit} /> <a>Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Categories
