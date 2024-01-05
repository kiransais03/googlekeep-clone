import React from 'react';
import "./roundbutton-styles.css";

function Roundbutton  ({namecomp,clickfunction})  {

  return (
    <button className='roundbtn' onClick={clickfunction}>{namecomp}</button>
  )
}

export default Roundbutton
