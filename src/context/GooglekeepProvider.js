import React,{useState} from "react";
import Googlekeepcontext from "./Googlekeepcontext";

const GooglekeepProvider = (props)=>{
    let [createnotefocused,setCreatenotefocused] = useState(false);

    return (<Googlekeepcontext.Provider value={
          {createnotefocused:createnotefocused,
           setCreatenotefocused:setCreatenotefocused}}>
            {props.children};
           </Googlekeepcontext.Provider>)
}

export default GooglekeepProvider;