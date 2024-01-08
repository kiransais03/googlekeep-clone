import React, { useEffect, useState,useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Googlekeepcontext from '../../context/Googlekeepcontext';
import Note from '../../components/Note/Note';

function Labelnotespage() {

    const location = useLocation();

    let contextobj = useContext(Googlekeepcontext);

    const [labelpagename,setLabelpagename] = useState("");

    let [nogrouplabelnotes,setNogrouplabelnotes] = useState(true);

    // const [currnamelabelnotesarr,setCurrnamelabelnotesarr] = useState([])

    let [refresh,setRefresh] = useState([]);


    useEffect(()=>{
       let path = location.pathname;
       let newPath = path.split("").slice(1).join("").toUpperCase();
       setLabelpagename(newPath);
       let temparr = contextobj.notesarr.filter((noteObj, index)=>{
          if(noteObj.labels.some((elem)=> elem.toUpperCase()===newPath ))
          {
            return true;
          }
          else {
            return false;
          }
       })

       if (temparr.length>0) {
         console.log(temparr,"temparr")
        setNogrouplabelnotes(false);
      }
      else {
        setNogrouplabelnotes(true)
      }
       contextobj.setCurrnamelabelnotesarr(temparr);
    },[contextobj.refreshcontext,contextobj.notesarr])

    console.log("Noteobj from *",labelpagename,contextobj.notesarr,contextobj.currnamelabelnotesarr);

  return (
    <div style={{textAlign:"center",margin:"10px"}}>
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
    Label Group- {labelpagename}
    {contextobj.currnamelabelnotesarr && contextobj.currnamelabelnotesarr.map((noteObj, index) => {
      console.log("rendering comps",index,noteObj)
      if(!noteObj.trashed) {
      return <Note key={index} setRefresh={setRefresh} dispatchfunc={contextobj.dispatchfunc} noteObj={noteObj} />;
      }
    })}
    {nogrouplabelnotes && <p style={{color:"grey"}}>No {labelpagename} Label Notes Available</p>}
    </div>
  </div>
  )
}

export default Labelnotespage
