import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";

import "./app-styles.css";

import Navbar from "./components/Navbar/Navbar";
import Minidrawer from "./components/Minidrawer/Minidrawer";
import Homepage from "./pages/Homepage/Homepage";
import Archivepage from "./pages/Archivepage/Archivepage";
import Trashpage from "./pages/Trashpage/Trashpage";
import Modal from "./components/Modal/Modal";

function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
     <Navbar/>
     <Minidrawer handleClickOpen={handleClickOpen}/>
     <Modal handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/archive" element={<Archivepage/>}/>
       <Route path="/trash" element={<Trashpage/>}/>
     </Routes>
    </div>
  );
}

export default App;
