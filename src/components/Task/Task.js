import React, { useState } from "react";

function Task({ taskObj, dispatchfunc }) {
  let [editValue, setEditValue] = useState(taskObj.text);

  const handleDelete = () => {
    dispatchfunc({
      type: "DELETE_DATA",
      id: taskObj.id
    });
  };

  const handleEdit = () => {
    dispatchfunc({
      type: "EDIT_DATA",
      id: taskObj.id,
      obj: { id: taskObj.id, text: editValue, editing: true }
    });
  };

  const handleSave = () => {
    dispatchfunc({
      type: "EDIT_DATA",
      id: taskObj.id,
      obj: { id: taskObj.id, text: editValue, editing: false }
    });
  };

  if (taskObj.editing === true) {
    return (
      <div>
        <input type="checkbox" />
        <input
          type="text"
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  } else {
    return (
      <div>
        <input type="checkbox" />
        <p style={{ display: "inline" }}>{taskObj.text}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Task;
