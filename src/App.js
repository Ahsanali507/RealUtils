
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");

  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const toggleMode1=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='rgb(50, 73, 50)';
      document.body.style.color='white';
      showalert('Dark mode has been enabled','success');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert('Light mode has been enabled','success');
    }
  }
  const toggleMode2=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
      showalert('Grey mode has been enabled','success');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert('Light mode has been enabled','success');
    }
  }
  const toggleMode3=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='rgb(15, 73, 85)';
      document.body.style.color='white';
      showalert('Bluish mode has been enabled','success');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert('Light mode has been enabled','success');
    }
  }

  return (
    <>
    <Router>
    <Navbar title='ReactUtils' aboutText='About Us' contactText='Contact Us' mode={mode} toggle1={toggleMode1} toggle2={toggleMode2} toggle3={toggleMode3}/>
    <Alert alert={alert}/>
    {/* <Navbar/>    */}
    {/* <Navbar title='ReactUtils'/>    */}
    <div className="container">
      <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/' element={<Textarea heading='Simple Textarea' para='Put text in textarea to change it,clear,copy and remove extra spaces:' showalert={showalert}/>}/>
      </Routes>
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;