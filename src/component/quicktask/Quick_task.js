import React from 'react'
import { Link } from 'react-router-dom'
import In_pogress from '../shared/In_pogress'
import To_do from '../shared/To_do'
import Completed from '../shared/Completed'
import Lower_nav from '../shared/Lower_nav'
import Filter from '../shared/Filter'
import '../project/projects.css'
import Test from '../shared/Test'
import Nav from '../shared/Nav'
function Quick_task() {
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
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ marginTop: '2%' }}>
          <div className="carousel-item active">
            <div>
              <Test />
            </div>
            <div>
              <In_pogress />
            </div>
            <div>
              <To_do />
            </div>
            <div>
              <Completed />
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <Test />
            </div>
            <div>
              <In_pogress />
            </div>
            <div>
              <To_do />
            </div>
            <div>
              <Completed />
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Quick_task
