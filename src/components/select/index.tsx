import React from "react";
import "./style.css"

export const Select = () => {
  return (
    <select name="genre" className="select">
      <option value="loop-gate">Loop Gate</option>
      <option value="style">Style</option>
      <option value="tech-camp-advance">TECH CAMP ADVANCE</option>
    </select>
  );
};