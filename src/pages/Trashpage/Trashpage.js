import React,{useContext,useState,useEffect} from 'react';
import Googlekeepcontext from '../../context/Googlekeepcontext';
import Note from '../../components/Note/Note';

function Trashpage() {

let contextobj = useContext(Googlekeepcontext);

let [refresh,setRefresh] = useState([]);

let [notrash,setNotrash] = useState(true);

const hasTrash = contextobj.notesarr.some((note)=>{return note.trashed});

useEffect(()=>{
  if (hasTrash) {
    setNotrash(false);
  }
  else {
    setNotrash(true)
  }
},)

  return (
    <div style={{textAlign:"center",margin:"10px"}}>
      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Trash
      {contextobj.notesarr.map((noteObj, index) => {
        if(noteObj.trashed) {
        return <Note key={index} setRefresh={setRefresh} dispatchfunc={contextobj.dispatchfunc} noteObj={noteObj} />;
        }
      })}
      {notrash && <p style={{color:"grey"}}>Trash Bin Is Empty</p>}
      </div>
    </div>
  )
}

export default Trashpage
