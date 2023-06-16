import React, { useState } from 'react';
import dot from '../../assets/svg/dot.svg';
import './menu.css';
import Details_screen from './Details_screen';
import Attachment_screen from './Attachment_screen';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './spinner/spinner';


function Menu({ data }) {

  const [isloading, setIsloading] = useState(false);
  const [details, setDetails] = useState(false);
  const [statusValue, setStatusValue] = useState("false");
  const handleDetails = () => {
    setDetails(!details);
  };

  const [attachment, setAttachment] = useState(false);
  const handleAttachment = () => {
    setAttachment(!attachment);
  };

  const navigate = useNavigate()

  const user = useSelector((state) => state.loginUser.user);
  const token = user.token;


  const handleDelete = async (data) => {

    try {
      if (data.type === "Project") {
        try {
          const res = await axios({
            method: 'delete',
            url: `${API_HOST}/project/deleteproject/${data._id}`,
            data: {},
            headers: {
              token: token,
            },
          });
          window.location.reload();
          toast.error(`Project deleted`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          console.log(err);
        }
      }
      else if (data.type === "Subtask") {
        try {
          const res = await axios({
            method: 'delete',
            url: `${API_HOST}/subtask/deleteSubtask/${data._id}`,
            data: {},
            headers: {
              token: token,
            },
          });
          window.location.reload();
          toast.error(`Subtask deleted`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          console.log(err);
        }
      }
      else if (data.type === "Task") {
        try {
          const res = await axios({
            method: 'delete',
            url: `${API_HOST}/task/deleteTask/${data._id}`,
            data: {},
            headers: {
              token: token,
            },
          });
          window.location.reload();
          toast.error(`Task deleted`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          console.log(err);
        }
      }


    } catch (err) {
      console.log(err)
    }
  };
  ///////////////////////////////////////////////////////
  const handleStatusvalue = async (value, data) => {

    try {
      if (data.type === "Project") {
        try {
          const res = await axios({
            method: 'put',
            url: `${API_HOST}/project/updateprojectStatus/${data._id}`,
            data: {
              status: `${value}`
            },
            headers: {
              token: token,
            },
          });
          window.location.reload();
          toast.error(`status updated`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          return console.log(err);
        }
      }
      else if (data.type === "Subtask") {
        try {
          const res = await axios({
            method: 'put',
            url: `${API_HOST}/subtask/updateSubtaskStatus/${data._id}`,
            data: {
              "status": value
            },
            headers: {
              token: token,
            },
          });
          window.location.reload();
          toast.error(`status updated`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          return console.log(err);
        }
      }
      else if (data.type === "Task") {
        try {
          const res = await axios({
            method: 'put',
            url: `${API_HOST}/task/updateTaskstatus/${data._id}`,
            data: {
              "status": value
            },
            headers: {
              'Content-Type': 'application/json',
              token: token,
            },
          });
          window.location.reload();
          toast.error(`status updated`, { position: toast.POSITION.TOP_CENTER });
          return;
        } catch (err) {
          return console.log(err);
        }
      }

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div>
      <ToastContainer />
      <DropdownButton id='dropdown-menu' title={<img src={dot} alt='dot' />} drop="left">
        <Dropdown.Item>
          <a
            data-toggle="modal"
            data-target="#exampleModalDetails"
            onClick={handleDetails}
          >
            View Details
          </a>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleAttachment}>
          <a
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={handleAttachment}
          >
            View Attachments
          </a>
        </Dropdown.Item>
        <NavDropdown title='Update Status' id='dropdown-submenu' >
          <NavDropdown.Item onClick={() => handleStatusvalue("todo", data)}>
            Assigned
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("pending", data)}>
            In Progress
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("pendingclientreview", data)}>
            Pending Client Review
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("pendingthirdpartyaction", data)}>
            Pending Third Party Action
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("revision", data)}>
            Revision
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("readyforreview", data)}>
            Ready for Review
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleStatusvalue("completed", data)}>
            Completed
          </NavDropdown.Item>
        </NavDropdown>
        <Dropdown.Item>Chat</Dropdown.Item>
        <Dropdown.Item onClick={() => handleDelete(data)}>Delete</Dropdown.Item>
      </DropdownButton>
      {details && <Details_screen handleDetails={handleDetails} data={data} />}
      {attachment && <Attachment_screen data={data.files} handleAttachment={handleAttachment} />}
    </div>

  );
}

export default Menu;
