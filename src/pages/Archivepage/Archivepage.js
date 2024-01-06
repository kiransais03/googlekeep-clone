import React,{useContext,useState,useEffect} from 'react';
import Googlekeepcontext from '../../context/Googlekeepcontext';
import Note from '../../components/Note/Note';

function Archivepage() {

let contextobj = useContext(Googlekeepcontext);

let [refresh,setRefresh] = useState([]);

let [noarchives,setNoarchives] = useState(true);

const hasArchives = contextobj.notesarr.some((noteObj)=>{return noteObj.archived && !noteObj.trashed});

useEffect(()=>{
  if (hasArchives) {
    setNoarchives(false);
    // console.log("Refreshed");
  }
  else {
    setNoarchives(true)
  }
},[refresh])

console.log("Archives arr",contextobj.notesarr)

  return (
    <div style={{textAlign:"center",margin:"10px"}}>
      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Archives
      {contextobj.notesarr.map((noteObj, index) => {
        if(noteObj.archived && !noteObj.trashed) {
        return <Note key={index} setRefresh={setRefresh} dispatchfunc={contextobj.dispatchfunc} noteObj={noteObj} />;
        }
      })}
      {noarchives && <p style={{color:"grey"}}>No Archives Available</p>}
      </div>
    </div>
  )
}

export default Archivepage;
