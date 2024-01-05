import React,{useState} from "react";
import "./navbar-styles.css";

import Hamburger from  "../../svg/hamburger.svg";
import Searchicon from "../../svg/searchicon.svg";
import Settingsicon from "../../svg/settings.svg";
import Keeplogo from "../../images/keep.png";

import Searchinput from "../Input/Searchinput";
import Roundbutton from "../Roundbutton/Roundbutton";

function Navbar () {

  const [search,setSearch] = useState("");

   const focussearchInputbox =()=>{
     document.getElementsByClassName('search-input')[0].focus();
   }

    return (<div className="navbar">
        <div className="navleft">
          <Roundbutton namecomp={<img src={Hamburger} alt="menu"/>} />
          <img width="40px" height="40px" src={Keeplogo} alt="keeplogo"/>
          <h2 style={{color:"#5f6368",opacity:"1",fontWeight:"400"}}>Keep</h2>
        </div>
        <div className="navcentre">
          <button className="searchiconbtn" onClick={focussearchInputbox}><img src={Searchicon} alt="find"/></button> 
          <Searchinput type={"search"} placeholder={"Search"} state={search} setState={setSearch}/>
        </div>
        <div className="navright">
          <Roundbutton namecomp={<img src={Settingsicon} alt="settings"/>} />
        </div>
    </div>)
}

export default Navbar;