import React from 'react'
import './Filter.css'
import filter from '../../assets/svg/filter.svg'
function Filter() {
  return (
    <div>
      <ul className='filter' style={{ float: 'right' }}>
        <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary filter-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quick
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
        <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary filter-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Design
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
        <li>
          <button className="btn btn-secondary filter-button " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={filter} />    Filter
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Filter
