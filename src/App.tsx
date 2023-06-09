import { useState } from "react";
import ReactPaginate from "react-paginate";

import TodoForm from "./components/TodoForm";
import { FilterCriteria, Todo } from "./types";
import { TodoList } from "./components/TodoList";
import Filter from "./components/Filter";

const ITEMS_PER_PAGE = 2;

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterCriteria>("all");

  const filteredTodos = filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);

  const deleteTodo = (id: number) => setTodos(todos.filter((todo) => todo.id !== id));

  const changeStatus = (id: number, status: Todo["status"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));

  const changePriority = (id: number, priority: Todo["priority"]) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, priority } : todo)));

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEMS_PER_PAGE;

  const currentItems = filteredTodos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredTodos.length / ITEMS_PER_PAGE);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % todos.length;

    setItemOffset(newOffset);
  };

  return (
    <main className="mx-auto my-0 p-2 md:w-8/12 lg:w-6/12">
      <h1 className="relative mx-auto my-5 w-fit text-center text-3xl font-bold after:absolute after:left-0 after:top-5 after:-z-10 after:h-5  after:w-full after:bg-yellow-300 after:content-['']">
        COR Todo List
      </h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        changePriority={changePriority}
        changeStatus={changeStatus}
        deleteTodo={deleteTodo}
        filter={filter}
        filteredTodos={currentItems}
      />
      <ReactPaginate
        breakLabel="..."
        className="my-5 flex items-center justify-center gap-5"
        nextLabel="Next >"
        pageCount={pageCount}
        pageRangeDisplayed={ITEMS_PER_PAGE}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
      />
    </main>
  );
}

export default TodoApp;
