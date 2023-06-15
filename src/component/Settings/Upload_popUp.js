import React, { useState } from 'react';
import './Upload_popUp.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_HOST } from '../../assets/dataconfig/dataconfig';
import Spinner from '../shared/spinner/spinner';

export default function Upload_popUp(editPicture) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageupload, setSelectedImageupload] = useState(null);
  const [imageName, setImageName] = useState('');
  const [isloading, setIsloading] = useState(false);

  const user = useSelector((state) => state.loginUser.user);
  const profile = user.info.image;
  const id = user.info._id;
  console.log("asefwfwer", id)

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedImageupload(file);
      setImageName(file.name);
    }
  };


  const handleDelete = () => {
    setSelectedImage(null);
    setImageName('');
  };

  const handleUpload = async () => {
    setIsloading(true)
    try {
      const formData = new FormData();
      formData.append('file', selectedImageupload);
      console.log("afwerfwergv", formData);
      console.log(selectedImage);
      console.log("asdfghjkl;", selectedImageupload);

      const res = await axios.put(`${API_HOST}/user/updateImage/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setIsloading(false)
      toast.error('Image updated successfully', { position: toast.POSITION.TOP_CENTER });
      return;
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <ToastContainer />
            {isloading && <Spinner />}
            <div className="modal-body">
              <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Upload Profile Picture
              </h3>
              <form method="post" action="post" encType="multipart/form-data">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={(event) => handleFileSelect(event)}
                  accept="image/*"
                />
              </form>
              {selectedImage && (
                <div style={{ textAlign: 'center' }}>
                  <img
                    style={{ width: '105px', height: '105px', borderRadius: '10px' }}
                    id="selectedImage"
                    src={selectedImage}
                    alt="Selected Image"
                    onClick={() => document.getElementById('fileInput').click()}
                  />
                  <p id="imageName">{imageName}</p>
                </div>
              )}
              {!selectedImage && (
                <img
                  id="placeholderImage"
                  src={profile}
                  alt="Placeholder Image"
                  onClick={() => document.getElementById('fileInput').click()}
                />
              )}
              {selectedImage && (
                <div style={{ textAlign: 'center' }} className="button-container">
                  <button className="delete-button" onClick={handleDelete}>
                    Cancel
                  </button>
                  <button className="upload-button" onClick={handleUpload}>
                    Upload
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
