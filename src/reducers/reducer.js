const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETETODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
