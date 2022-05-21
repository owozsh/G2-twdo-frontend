import { task } from "../types";

export interface tasksState {
  tasks: task[];
}

const initialState = {
  tasks: [
    {
      id: "1",
      description: "task",
    },
    {
      id: "2",
      description: "task2",
    },
    {
      id: "3",
      description: "task2",
    },
  ],
};

type Action = { type: "ADD_TASK"; payload: task };

export const tasksReducer = (
  state: tasksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};
