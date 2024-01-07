import React, { useEffect, useState,useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Googlekeepcontext from '../../context/Googlekeepcontext';
import Note from '../../components/Note/Note';

let currnamelabelnotesarr=[];

function Labelnotespage() {

    const location = useLocation();

    let contextobj = useContext(Googlekeepcontext);

    const [labelpagename,setLabelpagename] = useState("");

    const [currnamelabelnotesarr,setCurrnamelabelnotesarr] = useState([])

    let [refresh,setRefresh] = useState([]);

    useEffect(()=>{
       let path = location.pathname;
       let newPath = path.split("").slice(1).join("").toUpperCase();
       setLabelpagename(newPath);
       let temparr = contextobj.notesarr.map((noteObj, index)=>{
          if(noteObj.labels.some((elem)=> elem.toUpperCase()===newPath ))
          {
            return noteObj;
          }
       })
       setCurrnamelabelnotesarr([...temparr])
    },[refresh])

  return (
    <div style={{textAlign:"center",margin:"10px"}}>
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
     {labelpagename} - Labelled Notes
    {currnamelabelnotesarr && currnamelabelnotesarr.map((noteObj, index) => {
      // if(!noteObj.trashed) {
      return <Note key={index} setRefresh={setRefresh} dispatchfunc={contextobj.dispatchfunc} noteObj={noteObj} />;
      // }
    })}
    </div>
  </div>
  )
}

export default Labelnotespage
