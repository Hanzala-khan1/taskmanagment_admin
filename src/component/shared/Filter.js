import React from 'react'
import './Filter.css'
import filter from '../../assets/svg/filter.svg'
function Filter() {
  return (
    <div>
      <ul className='filter' style={{ float: 'right' }}>
        <li className=''>
          <div class="dropdown">
            <button class="btn btn-secondary filter-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quick
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
        <li className=''>
          <div class="dropdown">
            <button class="btn btn-secondary filter-button dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Design
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </li>
        <li>
          <button class="btn btn-secondary filter-button " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={filter} />    Filter
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Filter
