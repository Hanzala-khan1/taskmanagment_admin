import React, { useState } from 'react';
import dot from '../../assets/svg/dot.svg';
import './menu.css';
import Details_screen from './Details_screen';
import Attachment_screen from './Attachment_screen';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';

function Menu({ data }) {
  const [details, setDetails] = useState(false);
  const handleDetails = () => {
    setDetails(!details);
  };

  const [attachment, setAttachment] = useState(false);
  const handleAttachment = () => {
    setAttachment(!attachment);
  };

  const user = useSelector((state) => state.loginUser.user);
  const token = user.token;

  const handleDelete = async () => {
    try {
      const res = await axios({
        method: 'delete',
        url: `${API_HOST}/project/deleteproject/${data._id}`,
        data: {},
        headers: {
          token: token,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DropdownButton id='dropdown-menu' title={<img src={dot} alt='dot' />}>
        <Dropdown.Item >
        <a 
        data-toggle="modal" data-target="#exampleModal"
        onClick={handleDetails} > 
        
        View Details </a></Dropdown.Item>
        
        <Dropdown.Item onClick={handleAttachment}>
        <a 
        data-toggle="modal" data-target="#exampleModalCenter"
        onClick={handleAttachment} > View Attachments
        </a>
        </Dropdown.Item>
        <NavDropdown title='Update Status' id='dropdown-submenu'>
          <NavDropdown.Item>Assigned</NavDropdown.Item>
          <NavDropdown.Item>In Progress</NavDropdown.Item>
          <NavDropdown.Item>Pending Client Review</NavDropdown.Item>
          <NavDropdown.Item>Pending Third Party Action</NavDropdown.Item>
          <NavDropdown.Item>Revision</NavDropdown.Item>
          <NavDropdown.Item>Ready for Review</NavDropdown.Item>
          <NavDropdown.Item>Completed</NavDropdown.Item>
          <NavDropdown.Item>Archive After 30 days</NavDropdown.Item>
        </NavDropdown>
        <Dropdown.Item>Chat</Dropdown.Item>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
      </DropdownButton>
      {details && <Details_screen handleDetails={handleDetails} data={data} />}
      {attachment && <Attachment_screen data={data.files} handleAttachment={handleAttachment} />}
    </div>
  );
}

export default Menu;
