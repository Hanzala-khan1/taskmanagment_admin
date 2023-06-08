import React, { useState } from 'react';
import './Upload_popUp.css';
import profile from '../../assets/svg/profile.svg';

export default function Upload_popUp(editPicture) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      setSelectedImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleDelete = () => {
    setSelectedImage(null);
    setImageName('');
  };

  const handleUpload = () => {
    // Handle the upload logic here
    // You can access the selectedImage and imageName states and perform the upload action
    console.log('Upload logic goes here');
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
            <div className="modal-body">
              <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Upload Profile Picture
              </h3>
              <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(event) => handleFileSelect(event)}
                accept="image/*"
              />
              {selectedImage && (
                <div style={{textAlign:'center'}}>
                  <img
                    style={{width:'105px', height:'105px',borderRadius:'10px'}}
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
                <div style={{textAlign:'center'}} className="button-container">
                  <button className="delete-button" onClick={handleDelete}>
                    Delete
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
