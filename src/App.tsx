import { useState } from "react";

import TodoForm from "./components/TodoForm";
import { FilterCriteria, Todo } from "./types";
import { TodoList } from "./components/TodoList";
import Filter from "./components/Filter";

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterCriteria>("all");

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);

  const deleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

  const changeStatus = (id: number, status: Todo["status"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));

  const changePriority = (id: number, priority: Todo["priority"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, priority } : todo)));

  return (
    <main className="mx-auto my-0 border-2 p-2 md:w-8/12">
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        changePriority={changePriority}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        filter={filter}
        todos={todos}
      />
    </main>
  );
}

export default TodoApp;
