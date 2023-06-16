import React from 'react'
import './spinner.css'
function Spinner() {
    return (
        <div >
            <div className='spinner-div' style={{ background: 'rgba(24, 20, 20, 0.1)' }}>
                <div className="loader"></div>
            </div>
        </div>
    )
}
export default Spinner