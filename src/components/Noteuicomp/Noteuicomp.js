import React, { useEffect, useState,useContext } from 'react';
import "./noteuicomp-styles.css";
import Menulist from "../Menulist/Menulist";
import Googlekeepcontext from "../../context/Googlekeepcontext";

import pinicon from "../../svg/pin.svg";
import pinselectedicon from "../../svg/pinselected.svg";
import archivesicon from "../../svg/archives.svg";
import trashicon from "../../svg/trash.svg"
import restoreicon from "../../svg/restoreicon.svg"
import deleteforevericon from "../../svg/deleteforevericon.svg"

import Roundbutton from "../Roundbutton/Roundbutton";
import { useLocation } from 'react-router-dom';

function Noteuicomp({notefocused,inputtitle,setInputtitle,selectedlabels,setSelectedlabels,inputtext,setInputtext,notebgcolor,setNotebgcolor,handleDelete,handleclose,setEdittrashed,setEditarchived,pinselected,setPinselected}) {

   const location = useLocation();

   let contextobj = useContext(Googlekeepcontext);

  //  console.log(notebgcolor,"BG COlor")

   const [disabled,setDisabled] = useState(false);
   const [btnstyle,setBtnstyle] = useState({visibility:"hidden"});
   

   useEffect(()=>{
    if(location.pathname==="/trash") {
      setDisabled(true);
      setBtnstyle({visibility:"visible"})
      console.log("loca",location.pathname)
    }
   },[])

    const handlepin = ()=>{
        if(pinselected) {
            setPinselected(false);
        }
        else {
            setPinselected(true);
        }
    }

    const handleDeleteforever = ()=>{
      if(disabled) {
        handleDelete();
      }
    }

  return (
    <div className='noteui' style={{backgroundColor:notebgcolor}}>
        <div className='notetitlerow'>
          <input className='note-input' style={{fontWeight:500,fontSize:"1.2rem",backgroundColor:notebgcolor}} type="text" placeholder="Title" value={inputtitle} onChange={(e)=> {setInputtitle(e.target.value)}}/>
          <Roundbutton styles={{backgroundColor:notebgcolor}} namecomp={<img src={pinselected?pinselectedicon:pinicon} alt='pin'/>} clickfunction={handlepin}/>
        </div>
        <div style={{display:"flex",justifyContent:"flex-start",paddingLeft:"10px",columnGap:"5px"}}>
          {selectedlabels && selectedlabels.map((label,index)=>{
             return (<div>
              <Roundbutton key={index} styles={{backgroundColor:notebgcolor,fontSize:"12px",border:"1px solid black",padding:"3px"}} namecomp={`${label} x`} clickfunction={()=>{setSelectedlabels((state)=>{return state.filter((elem)=>{return elem!==label})})}}/>
             </div>)
          })}
        </div>
           <textarea className='note-input' style={{fontWeight:500,fontSize:"1rem",height:`calc(${(parseInt(inputtext.length/34)) * 16}px + 40px)`,backgroundColor:notebgcolor}} placeholder="Take a note..." value={inputtext} onChange={(e)=>{setInputtext(e.target.value)}}/>
       <div className='notebtnrow' style={notefocused?{display:'flex'}:{display:"none"}}>
        <div style={{display:"flex",alignItems:"center"}}>
          {/* <Roundbutton disabled={disabled} namecomp={<img width="20px" style={{backgroundColor:notebgcolor}} src={backgroundcoloricon} alt='bgcoloricon'/>} clickfunction={handleColorpicker}/> */}
          <input type="color" style={{borderRadius:"5px"}} value={notebgcolor} onChange={(e)=>{setNotebgcolor(e.target.value)}}/>
          <Roundbutton styles={{backgroundColor:notebgcolor}} disabled={disabled} namecomp={<img width="20px" src={archivesicon} alt='archive'/>} clickfunction={()=>{setEditarchived((state)=>{if(state){return false} else {return true}})}}/>
          <Roundbutton styles={{backgroundColor:notebgcolor}}  namecomp={<img width="20px" src={disabled?deleteforevericon:trashicon} alt='trash'/>} clickfunction={()=>{setEdittrashed(true);handleDeleteforever()}}/>
          <Menulist selectedlabels={selectedlabels} setSelectedlabels={setSelectedlabels}/>
          <Roundbutton styles={{...btnstyle,backgroundColor:notebgcolor}}  namecomp={<img width="20px" src={restoreicon} alt='restore'/>} clickfunction={()=>{setEdittrashed(false)}}/>
        </div>
        <div>
          <Roundbutton disabled={disabled} namecomp={"Save"} styles={{fontWeight:"600",backgroundColor:notebgcolor}} clickfunction={handleclose}/>
        </div>
      </div>
    </div>
  )
}

export default Noteuicomp
