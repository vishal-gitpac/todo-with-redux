export const addtodo = (todo) => {
  return {
    type: "ADDTODO",
    payload: {
      id: Math.random(),
      data: todo,
    },
  };
};
export const deletetodo = (todo) => {
  return {
    type: "DELETETODO",
    payload: {
      id: todo.id,
    },
  };
};
