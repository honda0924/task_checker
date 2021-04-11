import React,{ useEffect, useState } from 'react';
import './style.css';
import { Header } from '../../components/header';
import { Select } from '../../components/select';
import { ToDoList } from '../../components/toDoList';
import { FormModal } from "../../components/modal";
import { taskType } from "../../interfaces/taskType";
import { taskRequest } from "../../requests/taskRequest";
import { genreRequest } from "../../requests/genreRequest";
import { Data, dataAction, useDataReducer } from "../../hooks/useDataReducer";
import { useFilterTasks } from "../../hooks/useFilterTasks";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

type dataContextType = {
  data:Data;
  dispatch: ({type, payload}: dataAction) => void;
}

export const DataContext = React.createContext<dataContextType>(
  {} as dataContextType
)

export const Home = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useDataReducer();
  const [selectGenreId, setSelectGenreId] = useState<number>(0);
  const [filteredTasks, taskDispatch] = useFilterTasks();
  const taskStatusElements: string[] = [
    'ToDo',
    'Pending',
    'Doing(Today)',
    'WIP',
    'Check',
    'Done'
  ];
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const changeSelectGenreId = (event: any) => {
    const id = event.target.value;
    setSelectGenreId(id);
  }

  useEffect(() => {
    const fetchData = async () => {
      const genres = await genreRequest("fetchGenres");
      const tasks = await taskRequest("fetchTasks");
      dispatch({type: "genresUpdate",payload: {genre: genres}});
      dispatch({type: "tasksUpdate",payload: {task: tasks}});
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    taskDispatch({
      type: 'filterTask',
      payload: {tasks: data.taskData, genreId: selectGenreId},
    });
  }, [data.taskData, selectGenreId]);


  return (
    <DataContext.Provider value={{data, dispatch}}>
      <div className="main">
        <Header />
        <div className="genre">
          <Select genres={data.genreData} changeSelect={changeSelectGenreId} />  
          <AddCircleOutlineIcon 
            className="add_circle_outline_icon" 
            fontSize="default"
            onClick={handleOpen}
          />
          <FormModal 
            handleClose={handleClose}
            isOpen={isOpen} 
            body="genreBody"
          />
        </div>
        <div className="contents">
          {taskStatusElements.map((element) => {
            const tasks = filteredTasks.filter((filteredTask: taskType) => {
              return (
                filteredTask.status === taskStatusElements.indexOf(element)
              );
            });
            return <ToDoList title={element} tasks={tasks} key={element} />
            })}
        </div>
      </div>
    </DataContext.Provider>
  );
}