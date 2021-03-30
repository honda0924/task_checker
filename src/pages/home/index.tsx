import React,{useState} from 'react';
import './style.css';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from "../../components/modal";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


export const Home = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="main">
      <Header />
      <div className="genre">
        <Select />  
        <AddCircleOutlineIcon 
          className="add_circle_outline_icon" 
          fontSize="default" 
          onClick={handleOpen}
        />
      </div>
        <FormModal handleClose={handleClose} isOpen={isOpen} />
      <div className="contents">
        <ToDoList />
      </div>
    </div>
  );
}