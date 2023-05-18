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
                <div> <Nav /> </div>
                <div>
                    <Lower_nav />
                    <Filter />
                </div>
                <div>
                    <h1>my frist commit </h1>
                </div>
            </div>
        </div>
    )
}

export default Categories
