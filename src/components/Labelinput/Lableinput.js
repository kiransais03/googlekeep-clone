import React,{useState,useContext} from 'react'

import Googlekeepcontext from '../../context/Googlekeepcontext';
import Roundbutton from '../Roundbutton/Roundbutton';

import tickicon from "../../svg/tickicon.svg";
import trashicon from "../../svg/trash.svg"

function Lableinput({labelobj,labelcurrid,setLabelcurrid}) {

    let contextobj = useContext(Googlekeepcontext);

 const [editlabel,setEditlabel]=useState(labelobj.labelname);


 const handleSave = () => {
    contextobj.dispatchlabelfunc({
      type: "EDIT_DATA",
      id: labelobj.id,
      obj: { id: labelobj.id,labelname:editlabel}
    });
  };

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Roundbutton namecomp={<img width="20px" src={trashicon} alt='trash'/>} clickfunction={()=>{}}/>
        <input className='note-input' type="text" placeholder="Label" value={editlabel} onChange={(e)=> {setEditlabel(e.target.value)}}/>
        <Roundbutton namecomp={<img width="20px" src={tickicon} alt='tick'/>} styles={{fontWeight:"400",opacity:"0.6"}} clickfunction={handleSave}/>
    </div>
  )
}

export default Lableinput
