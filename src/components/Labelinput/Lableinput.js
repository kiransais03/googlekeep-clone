import React,{useState,useContext} from 'react'
import {toast} from "react-toastify";

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
    toast.success("Label Saved")
  };

  const handleDelete = () => {
    contextobj.dispatchlabelfunc({
      type: "DELETE_DATA",
      id: labelobj.id
    });
    toast.success("Label Deleted")
    console.log("id",labelobj.id)
  };

  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Roundbutton namecomp={<img width="20px" src={trashicon} alt='trash'/>} clickfunction={handleDelete}/>
        <input className='note-input' type="text" placeholder="Enter Label Name" value={editlabel} onChange={(e)=> {setEditlabel(e.target.value)}}/>
        <Roundbutton namecomp={<img width="20px" src={tickicon} alt='tick'/>} styles={{fontWeight:"400",opacity:"0.5"}} clickfunction={handleSave}/>
    </div>
  )
}

export default Lableinput
