import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number, status: Todo["status"]) => void;
  changePriority: (id: number, priority: Todo["priority"]) => void;
};

export const TodoItem = ({ todo, deleteTodo, changePriority, changeStatus }: TodoItemProps) => {
  return (
    <li key={todo.id} className="my-2 border-2 p-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-20">
          <p className="w-32">Priority</p>
          <select
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="priority"
            name="priority"
            value={todo.priority}
            onChange={(e) => changePriority(todo.id!, e.target.value as Todo["priority"])}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <p className="w-32">Status</p>
          <select
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="status"
            name="status"
            value={todo.status}
            onChange={(e) => changeStatus(todo.id!, e.target.value as Todo["status"])}
          >
            <option value="new">New</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button
          className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          onClick={() => deleteTodo(todo.id!)}
        >
          Delete
        </button>
      </div>
      <h3 className="text-2xl">{`Title: ${todo.title}`}</h3>
      <p className="my-2">Description:</p>
      <p>{todo.description}</p>
    </li>
  );
};
