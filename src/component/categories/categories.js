import React from 'react'
import './categories.css'
import Lower_nav from '../shared/Lower_nav'
import Nav from '../shared/Nav'

import Filter from '../shared/Filter'
import globe from '../../assets/svg/globe.png'
import Delete from '../../assets/svg/delete.png'
import Edit from '../../assets/svg/edit.png'
import Category_popUp from '../shared/Category_popUp'
const Categories = () => {
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
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex category'>
                            <div>
                                <img src={globe} />
                            </div>
                            <div className='top-gap'>
                                <h5>Flutter</h5>
                                <div>
                                    <img src={Delete} /> <a>Delete</a> <img src={Edit} /> <a>Edit</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 d-flex category'>
                            <div>
                                <img src={globe} />
                            </div>
                            <div className='top-gap'>
                                <h5>Android Development</h5>
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
