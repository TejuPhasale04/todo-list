import { useState } from "react";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const Showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert({ msg: '', type: '' }); // Clear the alert after 3 seconds
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#6610f2";
      Showalert("Dark mode enable", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      Showalert("light mode enable", "success");
    }
  }

  return (
    <>
  {/*
   <Router>
        <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm Showalert={Showalert} title="Enter text to Analysis" mode={mode} />} />
        </Routes>
      </Router>
  */}   
       <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm Showalert={Showalert} title="Enter text to Analysis" mode={mode} />
    </>
  );
}

export default App;
