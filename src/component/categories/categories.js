
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
    const [popup, setPopup] = useState(false);
    const [pop, setPop] = useState(false);
    const handleEdit = () => {
        setPopup(!popup);
        setPop(false);
    };

    const handleAdd = () => {
        setPop(!pop);
        setPopup(false);
    };


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
                        {pop && <Category_popUp editCategory={false} />}
                    </div>
                    <div style={{ marginRight: '6rem' }}>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex category'>
                            <div>
                                <img src={globe} />
                            </div>
                            <div className='top-gap'>
                                <h5>Web Development</h5>
                                <div>
                                    <img src={Delete} /> <a>Delete</a> <img src={Edit} />
                                    <a onClick={handleEdit} data-toggle="modal" data-target="#exampleModal">
                                        Edit
                                    </a>
                                    {popup && <Category_popUp editCategory={true} />}

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
