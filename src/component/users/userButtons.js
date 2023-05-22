import React from 'react'
import person from '../../assets/svg/person-add.svg'
import del from '../../assets/svg/white-del.svg'
import select from '../../assets/svg/select1.svg'
import select1 from '../../assets/svg/rectangular.svg'
export default function UserButtons() {
  return (
    <div>
      <ul className='user_buttons' style={{ float: 'right' }}>
        <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary button_one size" type="button">
              <img className='img_1' src={person} />  Add User
            </button>

          </div>
        </li>
        <li className=''>
          <div className="dropdown">
            <button className="btn btn-secondary button_two size" type="button" >
              <img className='img_2' src={select1} /><img className='tick_img' style={{width:'10px'}} src={select} />  Select All
            </button>

          </div>
        </li>
        <li>
          <button className="btn btn-secondary button_three size" type="button">
            <img className='img_3' src={del} />   Delete Multiple
          </button>
        </li>
      </ul>
    </div>
  )
}
