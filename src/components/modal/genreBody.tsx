import React, { useContext, useState } from "react";
import { genreType } from "../../interfaces/genreType";
import { genreRequest } from "../../requests/genreRequest";
import { DataContext } from "../../pages/home";
import CancelIcon from "@material-ui/icons/Cancel";
import "./style.css";
import { getGeneratedNameForNode } from "typescript";

export const GenreBody = () => {
  const { data, dispatch } = useContext(DataContext);
  const [genreName, setGenreName] = useState<string>('');
  const changeGenreName = (val: any)=> {
    setGenreName(val.target.value);
  }
  const onClickSubmit = async() => {
    const newData: genreType = {
      id: 0,
      name: genreName,
    };
    try {
      const genres: genreType[] = await genreRequest("createGenres", {
        data: newData,
      });
      dispatch({type: "genresUpdate", payload: {genre: genres}});
      setGenreName('');
    } catch (err) {
      console.log(err.message);
    }
  }
  const onClickDelete = async(genre: genreType) => {
    try {
      const genres: genreType[] = await genreRequest("deleteGenres", {
        data: genre,
      });
      dispatch({type: "genresUpdate", payload: {genre: genres}});
      setGenreName('');
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="modal_body">
      <h2 className="input_menu">ジャンル編集</h2>
      <ul>
        {data.genreData.map((genre: genreType) => {
        return (
          <li className="genre_title" key={genre.id}>
            <span>{genre.name}</span>
            <CancelIcon onClick={()=> onClickDelete(genre)} />
          </li>
        );
      })}
      </ul>
      <input type="text"　value={genreName} onChange={changeGenreName} />
      <input 
        className="input_submit" 
        onClick={onClickSubmit} 
        type="button" 
        value="追加"
      />
    </div>
  );
};