import React from 'react';
import "./roundbutton-styles.css";

function Roundbutton  ({namecomp,clickfunction,styles})  {

  return (
    <button className='roundbtn' style={styles} onClick={clickfunction}>{namecomp}</button>
  )
}

export default Roundbutton
