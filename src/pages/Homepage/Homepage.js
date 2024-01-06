import React,{useState,useContext, useEffect} from 'react';
import Noteinputbox from "../../components/Noteinputbox/Noteinputbox";
import Notesdisplay from "../../components/Notesdisplay/Notesdisplay";
import Googlekeepcontext from '../../context/Googlekeepcontext';

function Homepage() {

  let contextobj = useContext(Googlekeepcontext);

  return (
    <div style={{textAlign:"center"}}>
      <Noteinputbox dispatchfunc={contextobj.dispatchfunc} currId={contextobj.currId} setCurrId={contextobj.setCurrId} />
      <Notesdisplay dispatchfunc={contextobj.dispatchfunc} notesarr={contextobj.notesarr} />
    </div>
  )
}

export default Homepage
