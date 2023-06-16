import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import '../project/projects.css';

function Lower_nav({ data }) {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link === activeLink ? '' : link);
  };

  return (
    <div style={{ paddingTop: "3rem" }}>
      <div style={{ display: 'inline-block' }}>
        <h3 className='heading1'>{data}</h3>
      </div>
      <br></br>
      <div>
        <ul className='list'>
          <li
            // style={{textDecoration:'underline'}}
            className={activeLink === 'projects' ? 'active' : ''}>
            <Link
              to='/project'
              className={`lower_a ${activeLink === 'projects' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </Link>
          </li>
          <li
            // style={{textDecoration:'underline'}}
            className={activeLink === 'projects' ? 'active' : ''}>
            <Link
              to='/project/task'
              className={`lower_a ${activeLink === 'projects' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Project Tasks
            </Link>
          </li>
          <li className={activeLink === 'quicktask' ? 'active' : ''}>
            <Link
              to='/quicktask'
              className={`lower_a ${activeLink === 'quicktask' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('quicktask')}
            >
              Quick Task
            </Link>
          </li>
          <li className={activeLink === 'categories' ? 'active' : ''}>
            <Link
              to='/categories'
              className={`lower_a ${activeLink === 'categories' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('categories')}
            >
              Categories
            </Link>
          </li>
          <li className={activeLink === 'chats' ? 'active' : ''}>
            <Link
              to='/chats'
              className={`lower_a ${activeLink === 'chats' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('chats')}
            >
              Chats
            </Link>
          </li>
          <li className={activeLink === 'users' ? 'active' : ''}>
            <Link
              to='/user'
              className={`lower_a ${activeLink === 'users' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('users')}
            >
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Lower_nav;
