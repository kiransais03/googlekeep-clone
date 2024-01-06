import React, { useState } from "react";
import Note from "../Note/Note";

function Notesdisplay({ dispatchfunc, notesarr }) {
  return (
    <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Pinned
      {notesarr.map((noteObj, index) => {
        if(noteObj.pinselected) {
        return <Note key={index} dispatchfunc={dispatchfunc} noteObj={noteObj} />;
        }
      })}
      </div>

      <div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
       Other Notes
      {notesarr.map((noteObj, index) => {
        if(!noteObj.pinselected)
        return <Note key={index} dispatchfunc={dispatchfunc} noteObj={noteObj} />;
      })}
      </div>
    </div>
    
  );
}

export default Notesdisplay;
