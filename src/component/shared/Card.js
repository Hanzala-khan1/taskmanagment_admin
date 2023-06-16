import React, { useState } from 'react'
import dot from '../../assets/svg/dot.svg'
import man from '../../assets/svg/man.svg'
import '../project/projects.css'
import { Link, useNavigate } from 'react-router-dom'
import './test.css'
import Menu from './Menu'
import Comment_popUp from './Comment_popUp'


function Card(card) {
  /////////////////////////
  const [comment, setComment] = useState(false);
  const Data = card.data
  ///////////////////
  const handleComment = (e) => {
    setComment(!comment);

  }

  const menuClicked = (e) => {
    // e.stopPropagation()
  }

  return (
    <div >
      <div className='div1 pad'>
        <div className='d-flex center justify'>
          <div className='d-flex center ' style={{ gap: '12px' }}>
            <img style={{ width: '35px', height: '35px', borderRadius: '50%' }} src={Data?.user_id?.image} />
            <h5>{Data?.title}</h5>
          </div>

          <p className={"p-high center " + (Data?.priority === "high" ?
            "bg-pink" : (Data?.priority
              === "low" ? "bg-blue" : "bg-green"))} style={{ color: "white" }}>{Data?.priority}</p>
        </div>
        <p style={{ marginLeft: '6px' }} >{Data.description} </p>
        <div className='d-flex' style={{ marginLeft: '6px', alignItems: 'center', gap: '10px' }}>
          {/* <img style={{ width: '20px', height:'20px',borderRadius:'50%' }} src={Data.user_id.image} /> */}
          <a style={{ margin: 'auto 0', textDecoration: 'underline' }}
            data-toggle="modal" data-target="#exampleModalComment"
            onClick={handleComment}
          >
            {Data.Comments.length} Comments</a>
          {comment && <Comment_popUp data={Data.Comments} />}
        </div>

        {/* <p className='time'>Est. {Data.created_at}</p> */}
        {/* <br></br> */}
        <a style={{ float: 'right' }} onClick={menuClicked}> <Menu data={Data} /> </a>

      </div>
    </div>
  )
}

export default Card
