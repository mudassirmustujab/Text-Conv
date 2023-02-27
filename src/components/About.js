import React from 'react'

function About(props) {

  return (
    <div className="H" style={{
      height :'100vh',
      backgroundColor : props.toggleMode==='dark'?'gray':'light',
      display:'flex',
      justifyContent:'center',
      
    }}>
    <div className='accordion' id="accordion mx-2" style={{
        width: '90vw',
        marginTop:'2rem'
    }} >
    <div  className={`card bg-${props.toggleMode}`}>
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button className="btn text-success btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Item
          </button>
        </h5>
      </div>
  
      <div id="collapseOne" className={` collapse show ${props.toggleMode==='dark'?'light':'dark'}`} aria-labelledby="headingOne" data-parent="#accordion">
        <div className={`card-body text-${props.toggleMode==='light'?'dark':'light'}`}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className={`card bg-${props.toggleMode}`}>
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn text-light btn-link accordion-button collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           Item 2
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className={`collapse ${props.toggleMode==='light'?'dark':'light'}`} aria-labelledby="headingTwo" data-parent="#accordion">
        <div className={`card-body text-${props.toggleMode==='light'?'dark':'light'}`}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
    <div className={`card bg-${props.toggleMode} `}>
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button className="btn text-light btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Item 3
          </button>
        </h5>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className={`card-body text-${props.toggleMode==='dark'?'light':'dark'}`}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default About