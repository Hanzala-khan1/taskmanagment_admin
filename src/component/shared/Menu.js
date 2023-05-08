import React from 'react'
import $ from "jquery"
import dot from '../../assets/svg/dot.svg'
import './menu.css'
function Menu() {
    {
        $(document).ready(function () {
            $('.dropdown-submenu a.test').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        });
    }
    return (
        <div>
            <div class="dropdown">
                <button class="btn " type="button" data-toggle="dropdown">
                    <img src={dot} /> </button>
                <ul class="dropdown-menu">
                    <li><a tabindex="-1" href="#">View Details</a></li>
                    <li><a tabindex="-1" href="#"></a>View Attachments</li>
                    <li class="dropdown-submenu">
                        <a class="test" tabindex="-1" href="#">Update Status <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a tabindex="-1" href="#">Assigned </a></li>
                            <li><a tabindex="-1" href="#">In Progress</a></li>
                            <li><a tabindex="-1" href="#">Pending Client Review</a></li>
                            <li><a tabindex="-1" href="#">Pending T5hird Party Action</a></li>
                            <li><a tabindex="-1" href="#">Revison</a></li>
                            <li><a tabindex="-1" href="#">Ready for Review</a></li>
                            <li><a tabindex="-1" href="#">Completed</a></li>
                            <li><a tabindex="-1" href="#">Archive After 30 days</a></li>
                        </ul>
                    </li>
                    <li><a tabindex="-1" href="#">Chat</a></li>
                    <li><a tabindex="-1" href="#">Delete</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Menu
