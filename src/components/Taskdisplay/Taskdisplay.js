import React, { useState } from "react";
import Task from "../Task/Task";

function TaskDisplay({ dispatchfunc, taskarr }) {
  return (
    <div>
      {taskarr.map((taskObj, index) => {
        return <Task key={index} dispatchfunc={dispatchfunc} taskObj={taskObj} />;
      })}
    </div>
  );
}

export default TaskDisplay;
