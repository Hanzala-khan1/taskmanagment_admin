import React from 'react'
import globe from '../../assets/svg/globe.png'

import './Category_popUp.css'
function Category_popUp({ editCategory }) {
  console.log("editCategory",editCategory)
  return (
    <div>
      {/* <a data-toggle="modal" data-target="#exampleModal">
         +Add New
       </a> */}

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{editCategory=true ? "Edit Category" : "Add Category"}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign: 'center' }}>
                <div>
                  <img style={{ marginRight: '3rem' }} src={globe} />
                </div>
              </div>
              <br></br>
              <div style={{ textAlign: 'center' }}>
                <input type="name" placeholder={editCategory=true ? "Update Category" : "Add Category"} className='inputs'></input>
                <br></br>
                <br></br>
                <input type="submit" value= {editCategory=true ? "Update Category" : "Add Category"} className='inputss'></input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Category_popUp
