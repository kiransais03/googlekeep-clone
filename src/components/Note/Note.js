import React, { useState } from "react";

import Noteuicomp from "../Noteuicomp/Noteuicomp";

function Note({ noteObj, dispatchfunc }) {

  console.log(noteObj)

  let [editpinselected,setEditpinselected] = useState(noteObj.pinselected);
  let [edittitle, setEditTitle] = useState(noteObj.title);
  let [edittext, setEdittext] = useState(noteObj.text);
  // let [editarchived,setEditarchived] = useState(noteObj.archived);
  let [notefocused,setNotefocused] = useState(false);

  const handleDelete = () => {
    dispatchfunc({
      type: "DELETE_DATA",
      id: noteObj.id
    });
    console.log("id",noteObj.id)
  };

  const handleSave = () => {
    dispatchfunc({
      type: "EDIT_DATA",
      id: noteObj.id,
      obj: { id: noteObj.id,title:edittitle, text: edittext,pinselected:editpinselected,archived:false }
    });
    // console.log("arch",editarchived)
    setNotefocused(false);
  };

  const handlearchived = () => {
    dispatchfunc({
      type: "EDIT_DATA",
      id: noteObj.id,
      obj: { id: noteObj.id,title:edittitle, text: edittext,pinselected:editpinselected,archived:true }
    });
    // console.log("arch",editarchived)
    setNotefocused(false);
  };

    return (
      <div style={{width:"fit-content",margin:"0 auto"}} onMouseOver={()=>{setNotefocused(true)}} onMouseLeave={()=>{setNotefocused(false);handleSave()}}>
        <Noteuicomp notefocused={notefocused} handlearchived={handlearchived} inputtitle={edittitle} handleclose={handleSave} handleDelete={handleDelete} setInputtitle={setEditTitle} inputtext={edittext} setInputtext={setEdittext} pinselected={editpinselected} setPinselected={setEditpinselected}/>
      </div>
    );
  }


export default Note;
