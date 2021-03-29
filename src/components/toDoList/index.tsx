import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import "./style.css";

export const ToDoList = () => {
  return (
    <div className="task_list">
      <div className="section">
        <MenuIcon className="section_ele" />
        <span className="section_ele">ToDo</span>
        <AddCircleOutlineIcon className="add_circle_outline_icon" fontSize="small" />
      </div>
      <div className="task_field"></div>
    </div>
  );
};