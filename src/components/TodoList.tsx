import { Todo, FilterCriteria } from "../types";

import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  changeStatus: (id: number, status: Todo["status"]) => void;
  changePriority: (id: number, priority: Todo["priority"]) => void;
  filter: FilterCriteria;
};

export const TodoList = ({
  todos,
  deleteTodo,
  changePriority,
  changeStatus,
  filter,
}: TodoListProps) => {
  const filteredTodos = filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <ul>
      {todos.length >= 0 &&
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            changePriority={changePriority}
            changeStatus={changeStatus}
            deleteTodo={deleteTodo}
            todo={todo}
          />
        ))}
    </ul>
  );
};
