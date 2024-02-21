import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del Alma",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO]Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log({ id });
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TODOAP : 10, <small>Pendientes:2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            onToggleTodo={handleToggleTodo}
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
        <h4>Agregar TODO</h4>
        <div className="col-5">
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
