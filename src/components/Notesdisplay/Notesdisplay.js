import React, { useEffect, useState,useContext } from "react";
import Note from "../Note/Note";

function Notesdisplay({ dispatchfunc, notesarr }) {

  let [nopinned,setNopinned] = useState(true);
  let [noothers,setnoothers] = useState(true);

  let [refresh,setRefresh] = useState([]);

  // console.log("Nopinnedrerender")

  const hasPinnedNote = notesarr.some((noteObj) => noteObj.pinselected && !noteObj.archived);
  const hasOthers = notesarr.some((noteObj) => !noteObj.pinselected && !noteObj.archived);

  useEffect(()=>{
    if (hasPinnedNote) {
      setNopinned(false);
      // console.log("Refreshed");
    }
    else {
      setNopinned(true)
    }
  },[refresh])

  useEffect(()=>{
    if (hasOthers) {
      setnoothers(false);
      // console.log("Refreshed");
    }
    else {
      setnoothers(true)
    }
  },[refresh])
  

  return (
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Pinned
      {notesarr.map((noteObj, index) => {
        if(noteObj.pinselected && !noteObj.archived && !noteObj.trashed) {
           return <Note key={index} setRefresh={setRefresh} dispatchfunc={dispatchfunc} noteObj={noteObj} />;
        }
      })}
      {nopinned && <p style={{color:"grey"}}>No Pinned Items Available</p>}
      </div>

      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Other Notes
      {notesarr.map((noteObj, index) => {
        if(!noteObj.pinselected && !noteObj.archived && !noteObj.trashed)
        return <Note key={index} setRefresh={setRefresh} dispatchfunc={dispatchfunc} noteObj={noteObj} />;
      })}
       {noothers && <p style={{color:"grey"}}>No Other Items Available</p>}
      </div>
    </div>
    
  );
}

export default Notesdisplay;
