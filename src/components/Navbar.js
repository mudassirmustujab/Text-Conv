import React, {useState} from 'react'

function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg navbar-light text-${props.toggleMode==='light'?'dark':'light'} bg-${props.toggleMode}`}>
  <a className={`navbar-brand mx-4 text-${props.toggleMode==='light'?'dark':'light'}`} href="#">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className={`nav-link text-${props.toggleMode==='light'?'dark':'light'}`} href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className={`nav-link text-${props.toggleMode==='light'?'dark':'light'}`} href="#">Link</a>
      </li>
    
    </ul>
   
  </div>
  <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitch1" onClick={props.mode}/>
  <label class="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
</div>
</nav>
  )
}

export default Navbar