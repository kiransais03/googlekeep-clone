import React from 'react'
import "../Input/searchinput-styles.css";
import { useNavigate } from 'react-router-dom';

function Searchinput({type,placeholder,state,setState}) {

  let navigate = useNavigate();
  
  return (
    <input onFocus={()=>{navigate('/')}} className='search-input' type={type} placeholder={placeholder} value={state} onChange={(e)=>{setState(e.target.value)}}/>
    )
}

export default Searchinput