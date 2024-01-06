import React, { useContext, useState } from "react";
import Noteuicomp from "../Noteuicomp/Noteuicomp";

import Googlekeepcontext from "../../context/Googlekeepcontext";

function Noteinputbox({ dispatchfunc, currId, setCurrId }) {

  let [inputtitle, setInputtitle] = useState("");
  let [inputtext, setInputtext] = useState("");
  let [pinselected,setPinselected] = useState(false);
  let [archived,setArchived] = useState(false);
  // let [createnotefocused,setCreatenotefocused] = useState(false);

  let contextobj = useContext(Googlekeepcontext);

  const handleAdd = () => {
    if(inputtitle || inputtext) {
    dispatchfunc({
      type: "ADD_DATA",
      id: currId,
      title:inputtitle,
      text: inputtext,
      pinselected : pinselected,
      archived : archived
    });
    setCurrId((currId) => currId + 1);
    setInputtext("");
    setInputtitle("");
  }
  contextobj.setCreatenotefocused(false);
  setPinselected(false);
  };

  const handlearchived = ()=>{
    dispatchfunc({
      
    })
  }

  return (
    <div style={{margin:"10px auto"}}>
      {contextobj.createnotefocused ? 
         <Noteuicomp notefocused={true} inputtitle={inputtitle} handlearchived={handlearchived} handleclose={handleAdd} setInputtitle={setInputtitle} inputtext={inputtext} setInputtext={setInputtext} pinselected={pinselected} setPinselected={setPinselected}/>
         :
      <div className="noteui" style={{border: "2px solid lightgrey"}} onFocus={()=>{contextobj.setCreatenotefocused(true)}}>
        <textarea className='note-input createnoteinput' style={{height:"20px"}} placeholder="+ Take a note..."  />
      </div>
      }
      
    </div>
  );
}

export default Noteinputbox;
