import { useState } from "react";

interface Todo {
  id: number | null;
  title: string;
  description: string;
  priority: string;
  status: string;
}

function TodoApp() {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: null,
    title: "",
    description: "",
    priority: "",
    status: "New",
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        ...newTodo,
        id: Math.floor(Math.random() * 1000),
      },
    ]);

    setNewTodo({
      id: null,
      title: "",
      description: "",
      priority: "",
      status: "",
    });
  };

  const handleDelete = (id: number) => {
    // delete todo
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleFilter = () => {};

  const { title, description, priority, status } = newTodo;

  return (
    <main className="mx-auto my-0 border-2 p-2 md:w-8/12">
      <form className="flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2">
          <input
            required
            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="name"
            name="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={handleChange}
          />
          <select
            required
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="priority"
            name="priority"
            value={priority}
            onChange={handleChange}
          >
            <option disabled hidden value="">
              Priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="status"
            name="status"
            value={status}
            onChange={handleChange}
          >
            <option value="New">New</option>
            <option value="In progess">In progess</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <textarea
          className="w-full grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          id="description"
          name="description"
          placeholder="Description"
          rows={5}
          value={description}
          onChange={handleChange}
        />
        <button
          className="mx-auto w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5"
          type="submit"
        >
          Create Task
        </button>
      </form>

      {/* Filters */}
      <h2 className="text-2xl">Filter by:</h2>
      <div className="my-5 flex gap-3">
        <div className="flex flex-col">
          <label htmlFor="">Priority</label>
          <select
            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="priority"
            name="priority"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Status</label>
          <select
            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="status"
            name="status"
          >
            <option value="low">New</option>
            <option value="medium">In progess</option>
            <option value="High">Done</option>
          </select>
        </div>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="my-2 border-2 p-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-20">
                <p>{`Priority: ${todo.priority}`}</p>
                <p>{`Status: ${todo.status}`}</p>
              </div>
              <button
                className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
            <h3 className="text-2xl">{`Title: ${todo.title}`}</h3>
            <p className="my-2">Description:</p>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default TodoApp;
