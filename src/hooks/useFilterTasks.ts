import { useReducer } from "react";
import { taskType } from "../interfaces/taskType";

export type filterAction = {
  type: "filterTask";
  payload: {
    tasks: taskType[];
    genreId: number;
  }
}

  export const useFilterTasks = (): any => {
    const initialData: taskType[] = [
      {
        id: 0,
        name: '',
        explanation: '',
        deadlineDate: '',
        status: 0,
        genreId: 0,
      },
    ];


    const reducer = (tasks: taskType[], action: filterAction ) => {
      switch (action.type) {
        case "filterTask":
          const id: number = Number(action.payload.genreId);
          if (id === 0){
            return action.payload.tasks;
          } else {
            return action.payload.tasks.filter((task: taskType) => {
              return id === task.genreId;
            });
          }
      
      }
  };

  const [filteredTasks, tasksDispatch] = useReducer(reducer, initialData);
  return [filteredTasks, tasksDispatch];

}