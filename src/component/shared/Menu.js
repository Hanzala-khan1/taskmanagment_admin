import React, { useState } from 'react'
import $ from "jquery"
import dot from '../../assets/svg/dot.svg'
import './menu.css'
import Details_screen from './Details_screen';
import Attachment_screen from './Attachment_screen';
function Menu({ data }) {
    const [details, setDetails] = useState(false);
    const handleDetails = () => {
        setDetails(!details);
    }

    const [attachment, setAttachment] = useState(false);
    const handleAttachment = () => {
        setAttachment(!attachment);
    }

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
            <div className="dropdown">
                <button className="btn " type="button" data-toggle="dropdown">
                    <img src={dot} /> </button>
                <ul className="dropdown-menu">
                    <li>
                        <a
                            data-toggle="modal" data-target="#exampleModal"
                            onClick={handleDetails}
                        >
                            View Details</a>
                    </li>

                    <li>
                        <a tabIndex="-1" href="#"
                            data-toggle="modal" data-target="#exampleModalCenter"
                            onClick={handleAttachment}
                        >View Attachments</a>
                    </li>
                    <li className="dropdown-submenu">
                        <a className="test" tabIndex="-1" href="#">Update Status <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a tabIndex="-1" href="#">Assigned </a></li>
                            <li><a tabIndex="-1" href="#">In Progress</a></li>
                            <li><a tabIndex="-1" href="#">Pending Client Review</a></li>
                            <li><a tabIndex="-1" href="#">Pending T5hird Party Action</a></li>
                            <li><a tabIndex="-1" href="#">Revison</a></li>
                            <li><a tabIndex="-1" href="#">Ready for Review</a></li>
                            <li><a tabIndex="-1" href="#">Completed</a></li>
                            <li><a tabIndex="-1" href="#">Archive After 30 days</a></li>
                        </ul>
                    </li>
                    <li><a tabIndex="-1" href="#">Chat</a></li>
                    <li><a tabIndex="-1" href="#">Delete</a></li>

                </ul>
                {details && <Details_screen handleDetails={handleDetails} data={data} />}
                {attachment && <Attachment_screen data={data.files} handleAttachment={handleAttachment} />}
            </div>
        </div>
    )
}

export default Menu
