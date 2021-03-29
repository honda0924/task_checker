import React from 'react';
import './style.css';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


export const Home = ()=> {
  return (
    <div className="main">
      <Header />
      <div className="genre">
        <Select />  
        <AddCircleOutlineIcon className="add_circle_outline_icon" fontSize="default" />
      </div>
    </div>
  );
}