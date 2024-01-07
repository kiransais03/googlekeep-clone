import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./app-styles.css";

import Navbar from "./components/Navbar/Navbar";
import Minidrawer from "./components/Minidrawer/Minidrawer";
import Homepage from "./pages/Homepage/Homepage";
import Archivepage from "./pages/Archivepage/Archivepage";
import Trashpage from "./pages/Trashpage/Trashpage";
import Modal from "./components/Modal/Modal";
import Labelnotespage from "./pages/Labelnotespage/Labelnotespage";

function App() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <ToastContainer />
     <Navbar/>
     <Minidrawer handleClickOpen={handleClickOpen}/>
     <Modal handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/archive" element={<Archivepage/>}/>
       <Route path="/trash" element={<Trashpage/>}/>
       <Route path="*" element={<Labelnotespage/>}/>
     </Routes>
    </div>
  );
}

export default App;
