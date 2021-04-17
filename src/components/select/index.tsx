import React from "react";
import{ genreType } from "../../interfaces/genreType";
import "./style.css";

interface Props {
  genres?: genreType[];
  changeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionElements?: string[];
  initialValue?: number;
}

const renderOption = (props: Props) => {
  if (props.genres !== undefined){
    return (
      props.genres &&
      props.genres.map((genre: genreType) =>(
  
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))
    );
  }else if(props.optionElements !== undefined){
    const values = props.optionElements;
    return values.map((val, index) => (
      <option key={ val } value={ index }>
        {val}
      </option>
    ))
  }

}

export const Select = (props: Props) => {
  return (
    <select className="select" onChange={props.changeSelect} value={props.initialValue}>
      {props.genres && <option value={0}></option>}
      {renderOption(props)}
    </select>
  );
};