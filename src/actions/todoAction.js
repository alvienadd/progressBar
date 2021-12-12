import { ADD_TODO } from "./actionCreator";
import { DELETE_TODO } from "./actionCreator";

export const addTodo = (todo) => {
  const action = {
    type: ADD_TODO,
    todo,
  };
  return action;
};

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id,
  };
  return action;
};
