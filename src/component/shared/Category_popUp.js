import React from 'react'
import Upload from '../../assets/svg/upload.svg'
import './Category_popUp.css'
function Category_popUp() {
  return (
    <div>
      <a data-toggle="modal" data-target="#exampleModal">
        +Add New
      </a>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign: 'center' }}>
                <div className='iconss'>
                  <img style={{marginTop:'3rem'}} src={Upload} />
                </div>
                <h4>Upload Icon</h4>
                <p>Upload 1:1 Ratio Icon</p>
              </div>
              <br></br>
              <div style={{textAlign:'center'}}>
                <input type="name" placeholder="Add Category" className='inputs'></input>
                <br></br>
                <br></br>
                <input type="submit" value="Add Category" className='inputss'></input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Category_popUp
