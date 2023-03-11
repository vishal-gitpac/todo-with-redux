import "./App.css";
import React, { useState } from "react";
import { addtodo, deletetodo } from "./actions/actions.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div className="main-page">
        <div className="todo-container">
          <div className="todo-title">TODO LIST</div>
          <div className="input">
            <div>
              <input
                type="text"
                placeholder="enter to add"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
              ></input>
            </div>
            <div>
              <button onClick={() => dispatch(addtodo(todo), setTodo(""))}>
                Add
              </button>
            </div>
          </div>
          <div className="todolist">
            {todos.map((todo) => (
              <div key={todo.id} className="todo">
                <div>{todo.data}</div>
                <button onClick={() => dispatch(deletetodo(todo))}>
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
