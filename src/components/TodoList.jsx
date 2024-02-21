import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            onToggleTodo={onToggleTodo}
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
