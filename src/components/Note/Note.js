import React, { useEffect, useState,useContext } from "react";
import {toast} from "react-toastify";
import { useLocation } from "react-router-dom";

import Googlekeepcontext from "../../context/Googlekeepcontext";
import Noteuicomp from "../Noteuicomp/Noteuicomp";

function Note({ noteObj,setRefresh }) {

  const location = useLocation();


  let [editpinselected,setEditpinselected] = useState(noteObj.pinselected);
  let [edittitle, setEditTitle] = useState(noteObj.title);
  let [edittext, setEdittext] = useState(noteObj.text);
  let [editarchived,setEditarchived] = useState(noteObj.archived);
  let [edittrashed,setEdittrashed] = useState(noteObj.trashed);
  let [editnotebgcolor,setEditnotebgcolor] = useState(noteObj.notebgcolor);
  let [editselectedlabels,setEditselectedlabels] = useState(noteObj.labels)

  let contextobj = useContext(Googlekeepcontext);

  useEffect(()=>{
    setRefresh([]);
    console.log("first time",noteObj)
  },[editpinselected,editarchived,edittrashed,editnotebgcolor])

  let [notefocused,setNotefocused] = useState(false);

  const handleDelete = () => {
    contextobj.dispatchfunc({
      type: "DELETE_DATA",
      id: noteObj.id
    });
    toast.success("Note Permanently Deleted")
    console.log("id",noteObj.id)
  };

  useEffect(()=>{
    handleSave();
  },[editpinselected,editarchived,edittrashed,editselectedlabels])


  const handleSave = () => {
    contextobj.dispatchfunc({
      type: "EDIT_DATA",
      id: noteObj.id,
      obj: { id: noteObj.id,title:edittitle, text: edittext,pinselected:editpinselected,archived:editarchived,trashed:edittrashed,notebgcolor:editnotebgcolor,labels: editselectedlabels}
    });
    setNotefocused(false);
  };

    return (
      <div style={{width:"fit-content",margin:"0 auto"}} onMouseOver={()=>{setNotefocused(true)}} onMouseLeave={()=>{setNotefocused(false)}}>
        {console.log("noteobjjjj",edittitle,edittext,editselectedlabels)}
        <Noteuicomp key={noteObj.id} notefocused={notefocused} selectedlabels={editselectedlabels} setSelectedlabels={setEditselectedlabels} notebgcolor={editnotebgcolor} setNotebgcolor={setEditnotebgcolor} setEditarchived={setEditarchived} inputtitle={edittitle} handleclose={handleSave} setEdittrashed={setEdittrashed} setInputtitle={setEditTitle} inputtext={edittext} setInputtext={setEdittext} pinselected={editpinselected} handleDelete={handleDelete} setPinselected={setEditpinselected}/>
      </div>
    );
  }


export default Note;
