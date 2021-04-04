import { useReducer } from "react";
import { genreType } from "../interfaces/genreType";
import { taskType } from "../interfaces/taskType";

export type dataAction = {
  type: "tasksUpdate" | "genresUpdate";
  payload: {task?: taskType[]; genre?: genreType[]}; 
};

export type Data = {
  taskData: taskType[];
  genreData: genreType[];
};

export const useDataReducer = (): [Data, ({type, payload}: dataAction) => void] => {
  const initialData: Data = {
    taskData:[
      {
        id: 0,
        name: '',
        explanation: '',
        deadlineDate: '',
        status: 0,
        genreId: 0,
      }
    ],
    genreData:[{id: 0, name: ''}],
  }

  const reducer = (state: Data, action: dataAction) => {
    switch (action.type) {
      case 'tasksUpdate':       
        return {...state, taskData: action.payload.task || state.taskData};

      case 'genresUpdate':
        return {...state, genreData:action.payload.genre || state.genreData};
    }
  }
  const [data, dispatch] = useReducer(reducer, initialData);
  return [data, dispatch];
}