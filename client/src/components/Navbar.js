import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Moments
    </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="https://github.com/divyanshrastogi51" rel="noreferrer" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/divyanshrastogi51/" rel="noreferrer" target="_blank">LinkedIn</a>
          <a href="https://medium.com/@divyanshrastogi501" rel="noreferrer" target="_blank">Medium</a>
        </div>
      </div>

    </>
  )
}

export default Navbar
