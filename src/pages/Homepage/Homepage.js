import React,{useState,useReducer} from 'react';
import Noteinputbox from "../../components/Noteinputbox/Noteinputbox";
import Taskdisplay from "../../components/Taskdisplay/Taskdisplay";

function Homepage() {

    let intialData = [{ id: 1, text: "HI this is task", editing: false }];

  let [currId, setCurrId] = useState(1);

  let [taskarr, dispatchfunc] = useReducer(reducer, intialData);

    function reducer (state, action) {
      switch (action.type) {
        case "ADD_DATA":
        return [
          ...state,
          {
            id: currId,
            text: action.text,
            editing: false
          }
        ];
        break;

      case "EDIT_DATA":
        return state.map((task) => {
          if (task.id === action.id) {
            return action.obj;
          } else {
            return task;
          }
        });
        break;

      case "DELETE_DATA":
        return state.filter((task) => {
          if (task.id !== action.id) {
            return task;
          }
        });
        break;

      default:
        return state;
    }
  }

  return (
    <div style={{textAlign:"center"}}>
      <Noteinputbox dispatchfunc={dispatchfunc} currId={currId} setCurrId={setCurrId} />
      <Taskdisplay dispatchfunc={dispatchfunc} taskarr={taskarr} />
    </div>
  )
}

export default Homepage
