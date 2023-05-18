import React from 'react'
import Dot from '../../assets/svg/dot.svg'
function Menu() {
    return (
        <div>
            <div class="dropdown">
                <button class="btn " type="button" data-toggle="dropdown">
                    <img src={Dot} /> </button>
                <ul class="dropdown-menu">
                    <li><a tabindex="-1" href="#">View Details</a></li>
                    <li><a tabindex="-1" href="#"></a>View Attachments</li>
                    <li><a tabindex="-1" href="#">Chat</a></li>
                    <li><a tabindex="-1" href="#">Delete</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Menu
