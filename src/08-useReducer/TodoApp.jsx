import TodoList from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTodo } from "../hooks/";

//Function
const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TODO APP :{todosCount} ,<small>Pendientes: {pendingTodosCount}</small>
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
        <h4>Agregar un tarea</h4>
        <div className="col-5">
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
