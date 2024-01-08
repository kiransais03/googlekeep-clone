import React, { useEffect, useState,useContext } from "react";
import Note from "../Note/Note";
import Googlekeepcontext from "../../context/Googlekeepcontext";

function Notesdisplay({ dispatchfunc, notesarr }) {

  let [nopinned,setNopinned] = useState(true);
  let [noothers,setnoothers] = useState(true);

  let contextobj = useContext(Googlekeepcontext);

  let [refresh,setRefresh] = useState([]);

  console.log("search",contextobj.search)

  const hasPinnedNote = notesarr.some((noteObj) => noteObj.pinselected && !noteObj.archived && !noteObj.trashed);
  const hasOthers = notesarr.some((noteObj) => !noteObj.pinselected && !noteObj.archived  && !noteObj.trashed);

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

  if(contextobj.search) {
    return (
      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
        <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Search Results
      {notesarr.map((noteObj, index) => {
        //Search to find the from Title of Note or Text of NOte
        if(noteObj.title.toLowerCase().search(contextobj.search.toLowerCase())!==-1 || noteObj.text.toLowerCase().search(contextobj.search.toLowerCase())!==-1) {
           return <Note key={index} setRefresh={setRefresh} dispatchfunc={dispatchfunc} noteObj={noteObj} />;
        }
      })}
      </div>
       
      </div>
      
    );
  }

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
