import { ADD_TODO, DELETE_TODO } from "../actions/actionCreator";

const initState = [];
const todofn = (action) => {
  return {
    todo: action.todo,
    id: Math.random(),
  };
};
const deleteByID = (state = initState, id) => {
  const todos = state.filter((todo) => {
    return todo.id !== id;
  });
  return todos;
};
const todos = (state = initState, action) => {
  let todos = null;
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, todofn(action)];
      return todos;
    case DELETE_TODO:
      todos = deleteByID(state, action.id);
      return todos;
    default:
      return state;
  }
};

export default todos;
