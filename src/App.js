
import './App.css';
import Alert from './components/Alert';
// npm install react-router-dom
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
        setAlert({
          msg : message,
          type : type
        });
        setTimeout(()=>{
          setAlert(null)
        },
        1500
      );
    }

    const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        showAlert("Dark Mode has been enabled." , 'success');
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode has been enabled." , 'success');
      }
    }

  return (
    <>
        <Router>
        <Navbar title="TextUtils" mode={mode}  toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>} ></Route>
            <Route path="/about" element={<About mode={mode}/>} ></Route>
          </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/> */}
        </div>
        </Router>
    </>
  );
}

export default App;
