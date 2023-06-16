import React, { useEffect, useState } from 'react';
import './categories.css';
import Lower_nav from '../shared/Lower_nav';
import Nav from '../shared/Nav';
import Filter from '../shared/Filter';
import web from '../../assets/svg/web.svg';
import Delete from '../../assets/svg/delete.png';
import Edit from '../../assets/svg/edit.png';
import Category_popUp from '../shared/Category_popUp';
import axios from 'axios';
import { API_HOST, getcategories } from '../../assets/dataconfig/dataconfig';
import { useSelector } from 'react-redux';
import Spinner from '../shared/spinner/spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
  const [popup, setPopup] = useState(false);
  const [pop, setPop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesdata, setCategoriesdata] = useState('');
  const [isloading, setIsloading] = useState(false);

  const user = useSelector((state) => state.loginUser.user);
  const token = user.token;

  const handleEdit = (category) => {
    setPopup(!popup);
    setPop(false);
    setCategoriesdata(category);
  };

  const handleAdd = () => {
    setPop(!pop);
    setPopup(false);
  };

  useEffect(() => {
    getcategories();
  }, []);

  const getcategories = async () => {
    setIsloading(true)
    try {
      const res = await axios({
        method: 'get',
        url: `${API_HOST}/category/getcategory`,
        data: {},
        headers: {
          'Content-Type': '',
          token: token,
        },
      });
      setCategories(res.data.data);
      setIsloading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const Deletecategories = async (id) => {
    setIsloading(true)
    try {
      const res = await axios({
        method: 'delete',
        url: `${API_HOST}/category/deletecategory/${id}`,
        data: {},
        headers: {
          token: token,
        },
      });
      getcategories();
      setIsloading(false)
      toast.error(`category deleted`, { position: toast.POSITION.TOP_CENTER });
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {isloading && <Spinner />}
      <div>
        <Nav />
      </div>
      <div>
        <Lower_nav data={"Add/Edit Categories"} />
      </div>
      <div>
        <ToastContainer />
        <div className='categories'>
          <div className='top-x'>
            <h4>Categories</h4>
            <a onClick={handleAdd} data-toggle='modal' data-target='#realModal'>
              +Add New
            </a>
            {pop && <Category_popUp editCategory={false} getcategories={getcategories} />}
          </div>
          <div className='row' style={{ marginRight: '6rem', marginLeft: '3rem', overflowY: 'hidden' }}>
            {categories.map((Category) => {
              return (
                <div className='col-lg-3 col-md-6 col-sm-12 d-flex category' style={{ alignItems: 'center', marginRight: '35px' }} >
                  <div>
                    <img style={{ marginLeft: '15px', marginTop: '15px', width: '50px' }} src={web} alt='web' />
                  </div>
                  <div className='top-gap'>
                    <h5>{Category.category_title}</h5>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <img src={Delete} alt='delete' />
                      <a onClick={() => Deletecategories(Category._id)}>Delete</a>
                      <img style={{ width: '15px', height: '18px' }} src={Edit} alt='edit' />
                      <a onClick={() => handleEdit(Category)} data-toggle='modal' data-target='#exampleModal'>
                        Edit
                      </a>
                      {popup && (
                        <Category_popUp editCategory={true} Category={categoriesdata} getcategories={getcategories} key={Category._id} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
