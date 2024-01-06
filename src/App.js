import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";

import "./app-styles.css";

import Navbar from "./components/Navbar/Navbar";
import Minidrawer from "./components/Minidrawer/Minidrawer";
import Homepage from "./pages/Homepage/Homepage";

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Minidrawer/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
     </Routes>
    </div>
  );
}

export default App;
