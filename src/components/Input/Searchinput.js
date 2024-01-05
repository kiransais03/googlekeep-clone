import React from 'react'
import "../Input/searchinput-styles.css";

function Searchinput({type,placeholder,state,setState}) {
  
  return (
    <input className='search-input' type={type} placeholder={placeholder} value={state} onChange={(e)=>{setState(e.target.value)}}/>
    )
}

export default Searchinput