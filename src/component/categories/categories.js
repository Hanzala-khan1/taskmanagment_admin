
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
import { API_HOST, getcategories } from '../../assets/dataconfig/dataconfig'
import { useSelector } from 'react-redux'
const Categories = () => {
    const [popup, setPopup] = useState(false);
    const [pop, setPop] = useState(false);
    const [categories, setCategories] = useState([])
    const [categoriesdata, setCategoriesdata] = useState("")

    const user = useSelector(state => state.loginUser.user)
    const token = user.token

    const handleEdit = (category) => {
        setPopup(!popup);
        setPop(false);
        setCategoriesdata(category)
    };

    const handleAdd = () => {
        setPop(!pop);
        setPopup(false);
    };
    useEffect(() => {
        getcategories()
    }, [])
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
    const Deletecategories = async (id) => {

        try {
            const res = await axios({
                method: 'delete',
                url: `${API_HOST}/category/deletecategory/${id}`,
                data: {},
                headers: {
                    token: token
                }
            })
            getcategories()
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
                        <a onClick={handleAdd} data-toggle="modal" data-target="#realModal">
                            +Add New
                        </a>
                        {pop && <Category_popUp
                            editCategory={false}
                            getcategories={getcategories}
                        />}
                    </div>
                    <div style={{ marginRight: '6rem' }}>
                        {categories.map((Category) => {

                            return (
                                <div className='col-lg-3 col-md-6 col-sm-12 d-flex category'>
                                    <div>
                                        <img src={globe} />
                                    </div>
                                    <div className='top-gap'>
                                        <h5>{Category.category_title}</h5>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <img src={Delete} />
                                            <a
                                                onClick={() => Deletecategories(Category._id)}>Delete</a>
                                            <img style={{ width: '15px', height: '18px' }} src={Edit} />
                                            <a onClick={() => handleEdit(Category)} data-toggle="modal" data-target="#exampleModal">
                                                Edit
                                            </a>
                                            {popup && (
                                                <Category_popUp
                                                    editCategory={true}
                                                    Category={categoriesdata}
                                                    getcategories={getcategories}
                                                    key={Category._id} />
                                            )}

                                        </div>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Categories
