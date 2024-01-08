import React, { useContext, useState } from "react";
import Noteuicomp from "../Noteuicomp/Noteuicomp";

import Googlekeepcontext from "../../context/Googlekeepcontext";

function Noteinputbox({ dispatchfunc, currId, setCurrId }) {

  let [inputtitle, setInputtitle] = useState("");
  let [inputtext, setInputtext] = useState("");
  let [pinselected,setPinselected] = useState(false);
  let [archived,setArchived] = useState(false);
  let [trashed,setTrashed] = useState(false);
  let [notebgcolor,setNotebgcolor] = useState("#ffffff");
  let [selectedlabels,setSelectedlabels] = useState([])
  // let [createnotefocused,setCreatenotefocused] = useState(false);

  let contextobj = useContext(Googlekeepcontext);

  console.log("Color",notebgcolor)

  const handleAdd = () => {
    if(inputtitle || inputtext) {
    dispatchfunc({
      type: "ADD_DATA",
      id: currId,
      title:inputtitle,
      text: inputtext,
      pinselected : pinselected,
      archived : archived,
      trashed : trashed,
      notebgcolor:notebgcolor,
      labels : selectedlabels
    });
    setCurrId((currId) => currId + 1);
    setInputtext("");
    setInputtitle("");
    setSelectedlabels([]);
  }
  contextobj.setCreatenotefocused(false);
  setPinselected(false);
  };



  return (
    <div className="makenoteui" style={{margin:"10px auto"}}>
      {contextobj.createnotefocused ? 
         <Noteuicomp notefocused={true} selectedlabels={selectedlabels} setSelectedlabels={setSelectedlabels} inputtitle={inputtitle} setEdittrashed={setTrashed} setEditarchived={setArchived} notebgcolor={notebgcolor} setNotebgcolor={setNotebgcolor} handleclose={handleAdd} setInputtitle={setInputtitle} inputtext={inputtext} setInputtext={setInputtext} pinselected={pinselected} setPinselected={setPinselected}/>
         :
      <div className="noteui" style={{border: "2px solid lightgrey"}} onFocus={()=>{contextobj.setCreatenotefocused(true)}}>
        <textarea className='note-input createnoteinput' style={{height:"20px"}} placeholder="+ Take notes..."  />
      </div>
      }
      
    </div>
  );
}

export default Noteinputbox;
