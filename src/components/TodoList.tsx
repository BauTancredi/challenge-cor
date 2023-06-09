import { Todo, FilterCriteria } from "../types";

import { TodoItem } from "./TodoItem";

type TodoListProps = {
  deleteTodo: (id: number) => void;
  changeStatus: (id: number, status: Todo["status"]) => void;
  changePriority: (id: number, priority: Todo["priority"]) => void;
  filter: FilterCriteria;
  filteredTodos: Todo[];
};

export const TodoList = ({
  deleteTodo,
  changePriority,
  changeStatus,
  filteredTodos,
}: TodoListProps) => {
  return (
    <ul>
      {filteredTodos.length >= 0 &&
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
