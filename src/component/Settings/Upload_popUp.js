import React from 'react'
import './Upload_popUp.css'
import profile from '../../assets/svg/profile.svg'
export default function Upload_popUp(editPicture) {
    
    function openFileInput() {
        document.getElementById('fileInput').click();
    }
    function handleFileSelect(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var placeholderImage = document.getElementById('placeholderImage');
                placeholderImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }  
    return (
        <div>
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Upload Profile Picture</h3>
                            <input type="file" id="fileInput" style={{display: "none"}} onchange={(event)=>handleFileSelect(event)} accept="image/*" />
                            <img id="placeholderImage" src={profile} alt="Placeholder Image" onclick={(event)=>handleFileSelect(event)} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
