import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-light text-${props.toggleMode==='light'?'dark':'light'} bg-${props.toggleMode==='light'?'success':'dark'} `}>
  <Link className={`navbar-brand mx-4 text-light`} to="#">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto " style={{
      width:'80vw'
      
    }}>
      <li className="nav-item active">
        <Link className={`nav-link text-light`} to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-light`} to="/about">About</Link>
      </li>


  <div className="custom-control  text-light custom-switch " style={{
    marginLeft:'auto'

  }}>
      <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={props.mode}/>
      <label className="custom-control-label" htmlFor="customSwitch1">{props.modeInfo}</label>
      </div>
     
    </ul>
   
  </div>
    
        
</nav>
  )
}

export default Navbar