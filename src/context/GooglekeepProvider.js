import React,{useState,useReducer} from "react";
import Googlekeepcontext from "./Googlekeepcontext";

const GooglekeepProvider = (props)=>{

    let [currId, setCurrId] = useState(1);

    let [labelcurrid,setLabelcurrid] = useState(1);

    let initialLabelsarr = [{id:1,labelname:"#Label1"}];

    let [labelsarr, dispatchlabelfunc] = useReducer(reducerlabelfunc, initialLabelsarr);

    function reducerlabelfunc (state, action) {
      switch (action.type) {
        case "ADD_DATA":
        return [
          ...state,
          {
            id: labelcurrid,
            labelname : action.labelname
          }
        ];

      case "EDIT_DATA":
        return state.map((labelObj) => {
          if (labelObj.id === action.id) {
            return action.obj;
          } else {
            return labelObj;
          }
        });
 
      case "DELETE_DATA":
        return state.filter((labelObj)=> labelObj.id!==action.id)

      default:
        return state;
    }
  }


    let intialData = [{ id: 1,title:"Note 1", text: "Hi World",pinselected:false,archived:false,trashed:false,notebgcolor:"#a257ff"},
    { id: 2,title:"Note 85", text: "Lenovo",pinselected:true,archived:false,trashed:false,notebgcolor:"#26f2ca"}];

    let [createnotefocused,setCreatenotefocused] = useState(false);
    // let [contextnotesarr,setContextnotesarr] = useState([]);

    
    let [notesarr, dispatchfunc] = useReducer(reducerfunc, intialData);
    
    console.log(notesarr,"NOtes array printing in Context")

    function reducerfunc (state, action) {
        switch (action.type) {
          case "ADD_DATA":
          return [
            ...state,
            {
              id: currId,
              title:action.title,
              text: action.text,
              pinselected:action.pinselected,
              archived : action.archived,
              trashed : action.trashed,
              notebgcolor: action.notebgcolor
            }
          ];
  
        case "EDIT_DATA":
          return state.map((note) => {
            if (note.id === action.id) {
              return action.obj;
            } else {
              return note;
            }
          });
   
        case "DELETE_DATA":
          return state.filter((note)=> note.id!==action.id)
  
        default:
          return state;
      }
    }

    return (<Googlekeepcontext.Provider value={
          { createnotefocused:createnotefocused,
            setCreatenotefocused:setCreatenotefocused,
            notesarr:notesarr,
            dispatchfunc:dispatchfunc,
            currId :currId,
            setCurrId :setCurrId,
            labelsarr : labelsarr,
            dispatchlabelfunc : dispatchlabelfunc,
            setLabelcurrid : setLabelcurrid,
            labelcurrid : labelcurrid
          }
        }>
            {props.children};
           </Googlekeepcontext.Provider>)
}

export default GooglekeepProvider;