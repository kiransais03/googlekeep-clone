import React,{useState,useReducer} from 'react';
import Noteinputbox from "../../components/Noteinputbox/Noteinputbox";
import Notesdisplay from "../../components/Notesdisplay/Notesdisplay";

function Homepage() {

    let intialData = [{ id: 1,title:"Note 1", text: "Hi World",pinselected:false,archived:false},
    { id: 2,title:"Note 85", text: "Lenovo",pinselected:true,archived:false}];

  let [currId, setCurrId] = useState(1);

  let [notesarr, dispatchfunc] = useReducer(reducerfunc, intialData);

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
            archived : action.archived
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

  return (
    <div style={{textAlign:"center"}}>
      <Noteinputbox dispatchfunc={dispatchfunc} currId={currId} setCurrId={setCurrId} />
      <Notesdisplay dispatchfunc={dispatchfunc} notesarr={notesarr} />
    </div>
  )
}

export default Homepage
