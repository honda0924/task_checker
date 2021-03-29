import React from "react";
import { Select } from "../select";
import "./style.css";

export const Task = () => {
  return (
    <div className="task" style={{ backgroundColor: "white" }}>
      <div className="task_date">2021-03-30</div>
      <div className="task_text_contents">
        <div className="task_title">サンプルタイトル</div>
        <div className="task_sentence">
          サンプルテキスト
          <div className="task_input_contents">
            <Select />
          </div>
        </div>
        
      </div>


    </div>
  );
};