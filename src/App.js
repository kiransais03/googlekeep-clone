import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";

import "./app-styles.css";

import Navbar from "./components/Navbar/Navbar";
import Minidrawer from "./components/Minidrawer/Minidrawer";
import Homepage from "./pages/Homepage/Homepage";
import Archivepage from "./pages/Archivepage/Archivepage";
import Trashpage from "./pages/Trashpage/Trashpage";

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Minidrawer/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/archive" element={<Archivepage/>}/>
       <Route path="/trash" element={<Trashpage/>}/>
     </Routes>
    </div>
  );
}

export default App;
