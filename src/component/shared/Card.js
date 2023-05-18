import React from 'react'
import dot from '../../assets/svg/dot.svg'
import man from '../../assets/svg/man.svg'
import '../project/projects.css'
import { Link } from 'react-router-dom'
import './test.css'
import Menu from './Menu'
function Card(card) {
  const Data = card.data
  return (
    <div>
      <div className='div1 pad'>
        <div className='d-flex center justify'>
          <div className='d-flex center ' style={{ gap: '12px' }}>
            <img src={man} />
            <h5>{Data.user_id.name}</h5>
          </div>

          <p className={"p-high center " + (Data?.value === "High" ? "bg-pink" : (Data?.value === "Low" ? "bg-blue" : "bg-green"))}>{Data?.value}</p>
        </div>
        <p style={{ marginLeft: '6px' }} >{Data.description} </p>
        <div className='d-flex' style={{ marginLeft: '6px', alignItems: 'center', gap: '10px' }}>
          <img style={{ width: '6%' }} src={man} />
          <a style={{ margin: 'auto 0', textDecoration: 'underline' }}>2 Comments</a>
        </div>

        {/* <p className='time'>Est. {Data.created_at}</p> */}
        {/* <br></br> */}
        <a style={{ float: 'right' }}> <Menu /> </a>

      </div>
    </div>
  )
}

export default Card
