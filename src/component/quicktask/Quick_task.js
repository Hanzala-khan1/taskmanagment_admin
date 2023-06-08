import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import In_pogress from '../shared/In_pogress'
import To_do from '../shared/To_do'
import Completed from '../shared/Completed'
import Lower_nav from '../shared/Lower_nav'
import Filter from '../shared/Filter'
import '../project/projects.css'
import Test from '../shared/Test'
import Nav from '../shared/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import axios from 'axios'
import Review_projects from '../shared/Review_projects'
import Pending from '../shared/Pending'
import Revision from '../shared/Revision'
import Pending_3rdparty from '../shared/Pending_3rdparty'
function Quick_task() {
  const [subtaskTodo, setSubtaskTodo] = useState([]);
  const [subtaskCompleted, setSubtaskCompleted] = useState([]);
  const [subtaskPending, setSubtaskPending] = useState([]);
  const [subtaskAll, setSubtaskAll] = useState([]);
  const [taskreview, setTaskreview] = useState([]);
  const [taskclientreview, setTaskclientreview] = useState([]);
  const [taskrevision, setTasksrevision]= useState([]);
  const [task3rdparty, setTask3rdparty]= useState([]);
  const user = useSelector(state => state.loginUser.user)
  const token = user.token
  const dispatch = useDispatch();
  useEffect(() => {
    CompletedSubtask();
    PendingSubtask();
    todoSubtask();
    ALLSubtask();
  }, [])

  const CompletedSubtask = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/subtask/getSubtask?status=completed`,
        data: {},
        headers: {
          "Content-Type": '',
          token: token
        }
      })
      setSubtaskCompleted(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const PendingSubtask = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/subtask/getSubtask?status=pending`,
        data: {},
        headers: {
          "Content-Type": '',
          token: token
        }
      })
      setSubtaskPending(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const todoSubtask = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/subtask/getSubtask?status=todo`,
        data: {},
        headers: {
          "Content-Type": '',
          token: token
        }
      })
      setSubtaskTodo(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const ALLSubtask = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/subtask/getSubtask?status=new`,
        data: {},
        headers: {
          "Content-Type": '',
          token: token
        }
      })
      setSubtaskAll(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>

      <div>
        <Nav />
      </div>
      <div>
        <Lower_nav />
        <Filter />
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      {/* Cards */}

      <div id="carouselExampleIndicators" className="carousel slide" data-interval="false" data-pause="hover" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ marginTop: '2%' }}>
          <div className="carousel-item active">
            <div>
              <Test data={subtaskAll} />
            </div>
            <div>
              <In_pogress data={subtaskPending} />
            </div>
            <div>
              <To_do data={subtaskTodo} />
            </div>
            <div>
              <Completed data={subtaskCompleted} />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <Review_projects data={taskreview} />
            </div>
            <div>
              <Pending data={taskclientreview} />
            </div>
            <div>
              <Revision data={taskrevision} />
            </div>
            <div>
              <Pending_3rdparty data={task3rdparty} />
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Quick_task
