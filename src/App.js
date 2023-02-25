import React ,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Form from './components/Form';
// import ColorPicker from './components/ColorPicker';

function App() {

  const [myMode, setMyMode] = useState('light')
  const mode = ()=>{
    if (myMode==='light') {
      setMyMode('dark')
    } else {
      setMyMode('light')
    }
  }
  
  return (
 <>   
 
  <Navbar toggleMode={myMode} mode={mode} title="Text Conv"/>
  {/* <ColorPicker/> */}
  <Form toggleMode={myMode} />
  <About toggleMode={myMode} />
  {/* // toUpperCase={toUpperCase} addSampleText={addSampleText} */}
  </>

  );
}

export default App;
