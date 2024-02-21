import React from "react";

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="btn btn-danger mt-2"
      >
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
