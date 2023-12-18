import React from 'react'
import './lower-bar.styles.css'

const LowerBar = () => {
  return (
    <div id='lowbar'>
        <div className="low-container">
            <h3 className='lb-text'>Choose dishes</h3>
            <select name="" id="eat-options">
                <option>Dine in</option>
            </select>
        </div>
    </div>
  )
}

export default LowerBar
