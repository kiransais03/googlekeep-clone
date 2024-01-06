import React from 'react';
import "./roundbutton-styles.css";

function Roundbutton  ({namecomp,clickfunction,styles,disabled})  {

  return (
    <button className='roundbtn' disabled={disabled} style={styles} onClick={clickfunction}>{namecomp}</button>
  )
}

export default Roundbutton
