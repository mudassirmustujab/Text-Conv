import React ,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Form from './components/Form';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import ColorPicker from './components/ColorPicker';

function App() {

  const [myMode, setMyMode] = useState('light')
  const [modeStat, setmodeStat] = useState('Enable Dark Mode')
  const mode = ()=>{
    if (myMode==='light') {
      setMyMode('dark')
      setmodeStat("Enable Light Mode")
      document.title='Text Conv- Dark Mode'
      console.log(document)
    } else {
      setMyMode('light')
      setmodeStat("Enable Dark Mode")
      document.title='Text Conv - Light Mode'
    }
  }
  
  
  
  return (
 <>   
 
  <Router>
  <Navbar toggleMode={myMode} mode={mode} modeInfo={modeStat} title="Text Conv"/>
      <Routes>
          <Route path="/about" element={ <About toggleMode={myMode} />}/>
              
          
          
          <Route path="/" element={ <Form toggleMode={myMode} />}/>
           
             
          
       
        </Routes>
  </Router>

  {/* // toUpperCase={toUpperCase} addSampleText={addSampleText} */}
  </>

  );
}

export default App;
