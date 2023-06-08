import React from 'react'
import Card from './Card'
import '../project/projects.css'
import './test.css'
function Pending_3rdparty(data) {
    const card_3rdparty=data.data;

    return (
      <div>
        {/* In progress card */}
        <div className='col-lg-3 col-md-6 col-sm-12 ' style={{ flex: "1" }}>
          <div className=' main-card'>
            <div className="card">
              <div className="card-body">
                <div className='d-flex h-p justify-space'>
                  <h6 style={{ float: 'left', marginTop: '0' }}>Pending 3rd Party</h6>
                  <p style={{ float: 'right' }}>View All</p>
                </div>
              </div>
  
              {card_3rdparty.length > 0 ? (
                card_3rdparty.map((row) => {
                  return <Card data={row} key={row._id} />;
                })
              ) : (
                <div>
                  <div className='div1 pad' style={{ height: "100%" }}>
                    <div className='d-flex center justify'>
                      <div className='d-flex center ' style={{ gap: '12px' }}>
  
                        <h5>No available Content to show </h5>
                      </div>
                    </div>
                  </div>
                </div>
              )}
  
            </div>
          </div>
        </div>
      </div>
    )
}

export default Pending_3rdparty
