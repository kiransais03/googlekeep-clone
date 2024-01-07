import React,{useState,useReducer} from "react";
import Googlekeepcontext from "./Googlekeepcontext";
import { toast } from "react-toastify";

const GooglekeepProvider = (props)=>{

    let [currId, setCurrId] = useState(2);

    let [labelcurrid,setLabelcurrid] = useState(2);

    let initialLabelsarr = [{id:1,labelname:"Work"},{id:2,labelname:"Games"}];

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


    let intialData = [{ id: 1,title:"Note 1", text: "Hi World",pinselected:false,archived:false,trashed:false,notebgcolor:"#a257ff",labels:["Work"]},
    { id: 2,title:"Note 85", text: "Lenovo",pinselected:true,archived:false,trashed:false,notebgcolor:"#ffffff",labels:["Work","Games"]}];

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
              notebgcolor: action.notebgcolor,
              labels : action.labels
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

    const [search,setSearch] = useState("");

    const [refreshcontext,setRefreshcontext] = useState([]);

    const [currnamelabelnotesarr,setCurrnamelabelnotesarr] = useState([])

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
            labelcurrid : labelcurrid,
            search :search,
            setSearch:setSearch,
            setRefreshcontext : setRefreshcontext,
            refreshcontext : refreshcontext,
            currnamelabelnotesarr :currnamelabelnotesarr,
            setCurrnamelabelnotesarr : setCurrnamelabelnotesarr
          }
        }>
            {props.children};
           </Googlekeepcontext.Provider>)
}

export default GooglekeepProvider;