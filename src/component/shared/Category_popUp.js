import React, { useState } from 'react'
import globe from '../../assets/svg/globe.png'

import './Category_popUp.css'
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import axios from 'axios';
import { useSelector } from 'react-redux';
function Category_popUp(probs) {

  const { editCategory, Category, getcategories } = probs

  const [AddcategoryValue, setAddCategoryValue] = useState(
    editCategory === true ? Category.category_title : ""
  )

  const user = useSelector(state => state.loginUser.user)
  const token = user.token

  const handleChange = (e) => {
    setAddCategoryValue(e.target.value)
  }

  const handleAddCategory = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: `${API_HOST}/category/addcategory`,
        data: {
          category_title: AddcategoryValue
        },
        headers: {
          token: token
        }
      })
      getcategories();
    } catch (err) {
      console.log(err)
    }
  };
  const handleEditCategory = async (id) => {
    try {
      await axios({
        method: 'put',
        url: `${API_HOST}/category/updatecategory/${Category._id}`,
        data: {
          category_title: AddcategoryValue
        },
        headers: {
          token: token
        }
      })
      getcategories();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      {/* <a data-toggle="modal" data-target="#exampleModal">
         +Add New
       </a> */}

      <div className="modal fade" id={(editCategory === true ? "exampleModal" : "realModal")} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{editCategory === true ? "Edit Category" : "Add Category"}</h5>
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
                <input type="name"
                  placeholder={editCategory === true ? (`${Category.category_title}`) : ("Add Category")}
                  className='inputs'
                  value={AddcategoryValue}
                  onChange={handleChange}
                ></input>
                <br></br>
                <br></br>
                <input type="submit"
                  value={editCategory === true ? "Update Category" : "Add Category"}
                  className='inputss'
                  onClick={editCategory === true ? handleEditCategory : handleAddCategory}
                  data-dismiss="modal"
                  aria-label="Close"
                  aria-hidden="true"
                ></input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Category_popUp
