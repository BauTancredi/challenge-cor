import { useState } from "react";
import ReactPaginate from "react-paginate";

import TodoForm from "./components/TodoForm";
import { FilterCriteria, Todo } from "./types";
import { TodoList } from "./components/TodoList";
import Filter from "./components/Filter";

const ITEMS_PER_PAGE = 5;

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterCriteria>("all");

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);

  const deleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

  const changeStatus = (id: number, status: Todo["status"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));

  const changePriority = (id: number, priority: Todo["priority"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, priority } : todo)));

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;

  const filteredTodos = filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  const currentItems = filteredTodos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredTodos.length / ITEMS_PER_PAGE);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % todos.length;

    setItemOffset(newOffset);
  };

  return (
    <main className="mx-auto my-0 border-2 p-2 md:w-8/12">
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        changePriority={changePriority}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        filter={filter}
        todos={currentItems}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageCount={pageCount}
        pageRangeDisplayed={ITEMS_PER_PAGE}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
      />
    </main>
  );
}

export default TodoApp;
