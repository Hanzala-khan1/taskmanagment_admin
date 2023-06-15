import React from 'react'
import './projects.css'
import Test from '../shared/Test'
import Nav from '../shared/Nav'
import Lower_nav from '../shared/Lower_nav'
import In_pogress from '../shared/In_pogress'
import To_do from '../shared/To_do'
import Completed from '../shared/Completed'
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { API_HOST } from '../../assets/dataconfig/dataconfig'
import Review_projects from '../shared/Review_projects'
import Pending from '../shared/Pending'
import Revision from '../shared/Revision'
import Pending_3rdparty from '../shared/Pending_3rdparty'
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext'
import Spinner from '../shared/spinner/spinner'
function Projects() {
  const [projectstodo, setProjectstodo] = useState([]);
  const [projectscompleted, setProjectscompleted] = useState([]);
  const [projectspending, setProjectspending] = useState([]);
  const [projectsall, setProjectsall] = useState([]);
  const [projectsreview, setProjectsreview] = useState([]);
  const [pendingclientreview, setpendingclientreview] = useState([]);
  const [projectsrevision, setProjectsrevision] = useState([]);
  const [pending3rdparty, setPending3rdparty] = useState([]);

  const [isloading, setIsloading] = useState(false);

  const user = useSelector(state => state.loginUser.user);
  const token = user.token

  useEffect(() => {
    Completedprojects();
    Pendingprojects();
    Todoprojects();
    Newprojects();
  }, [])

  const Completedprojects = async () => {
    setIsloading(true)
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/project/getproject?status=completed`,
        data: {},
        headers: {
          token: token
        }
      })

      setProjectscompleted(res.data.data)
      setIsloading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const Todoprojects = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/project/getproject?status=todo`,
        data: {},
        headers: {
          token: token
        }
      });
      setProjectstodo(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }
  const Newprojects = async () => {
    setIsloading(true)
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/project/getproject?status=new`,
        data: {},
        headers: {
          token: token
        }
      });

      setProjectsall(res.data.data)
      setIsloading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const Pendingprojects = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/project/getproject?status=pending`,
        data: {},
        headers: {
          token: token
        }
      });

      setProjectspending(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {isloading && <Spinner />}
      <div>
        <Nav />
      </div>
      <div>
        <Lower_nav data={"Projects"} />
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
              <Test data={projectsall} />
            </div>
            <div>
              <In_pogress data={projectspending} />
            </div>
            <div>
              <To_do data={projectstodo} />
            </div>
            <div>
              <Completed data={projectscompleted} />
            </div>
          </div>
          <div className="carousel-item" >
            <div>
              <Review_projects data={projectsreview} />
            </div>
            <div>
              <Pending data={pendingclientreview} />
            </div>
            <div>
              <Revision data={projectsrevision} />
            </div>
            <div>
              <Pending_3rdparty data={pending3rdparty} />
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

export default Projects
