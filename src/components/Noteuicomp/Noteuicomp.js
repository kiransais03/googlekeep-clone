import React from 'react';
import "./noteuicomp-styles.css";

import pinicon from "../../svg/pin.svg";
import pinselectedicon from "../../svg/pinselected.svg";
import archivesicon from "../../svg/archives.svg";
import trashicon from "../../svg/trash.svg"
import backgroundcoloricon from "../../svg/backgroundcoloricon.svg"

import Roundbutton from "../Roundbutton/Roundbutton";

function Noteuicomp({notefocused,inputtitle,setInputtitle,inputtext,setInputtext,handleclose,handlearchived,handleDelete,pinselected,setPinselected}) {

    const handlepin = ()=>{
        if(pinselected) {
            setPinselected(false);
        }
        else {
            setPinselected(true);
        }
    }

  return (
    <div className='noteui'>
        <div className='notetitlerow'>
          <input className='note-input' style={{fontWeight:500,fontSize:"1.2rem"}} type="text" placeholder="Title" value={inputtitle} onChange={(e)=> {setInputtitle(e.target.value)}}/>
          <Roundbutton namecomp={<img src={pinselected?pinselectedicon:pinicon} alt='pin'/>} clickfunction={handlepin}/>
        </div>
           <textarea className='note-input' style={{fontWeight:500,fontSize:"1rem",height:`calc(${(parseInt(inputtext.length/34)) * 16}px + 40px)`}} placeholder="Take a note..." value={inputtext} onChange={(e)=>{setInputtext(e.target.value)}}/>
       <div className='notebtnrow' style={notefocused?{display:'flex'}:{display:"none"}}>
        <div>
          <Roundbutton namecomp={<img width="20px" src={backgroundcoloricon} alt='bgcoloricon'/>} clickfunction={handleclose}/>
          <Roundbutton namecomp={<img width="20px" src={archivesicon} alt='archive'/>} clickfunction={handlearchived}/>
          <Roundbutton namecomp={<img width="20px" src={trashicon} alt='trash'/>} clickfunction={handleDelete}/>
        </div>
        <div>
          <Roundbutton namecomp={"Save"} styles={{fontWeight:"600"}} clickfunction={handleclose}/>
        </div>
      </div>
    </div>
  )
}

export default Noteuicomp
