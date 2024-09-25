import Todo from "./Todo";

function TodoList({ todos, listType, deleteTodo }) {
  let filteredTodos = todoss.filtrer((item) => {
    if (listType === "all") {
      return true;
    } else if (listType === "complete") {
      if (item.completed === true) {
        return true;
      }
    } else {
      if (item.completed === false) {
        return true;
      }
    }
    return false;
  });

  return (
    <ul>
      filteredTodos.map((item) => (
        <Todo
          // item={item}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))
    </ul>
  );
}

export default TodoList;
