import React, { useState } from "react";

import { Todo } from "../types";

type TodoFormProps = {
  addTodo: (todo: Todo) => void;
};

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Todo["priority"]>("low");
  const [status, setStatus] = useState<Todo["status"]>("new");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      title,
      description,
      priority,
      status,
      id: Math.floor(Math.random() * 1000),
    };

    addTodo(newTodo);

    setTitle("");
    setDescription("");
    setPriority("low");
    setStatus("new");
  };

  return (
    <form className="flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
      <div className="flex justify-between gap-2">
        <input
          required
          className="w-80 rounded-lg  bg-[white] p-2.5 text-lg text-gray-900"
          id="name"
          name="title"
          placeholder="Title *"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          required
          className="grow rounded-lg  bg-[white] p-2.5 text-sm text-gray-900"
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value as Todo["priority"])}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          required
          className="grow rounded-lg bg-[white] p-2.5 text-sm text-gray-900"
          id="status"
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as Todo["status"])}
        >
          <option value="new">New</option>
          <option value="in Progress">In progess</option>
          <option value="done">Done</option>
        </select>
      </div>
      <textarea
        required
        className="w-full grow rounded-lg bg-[white] p-2.5 text-lg text-gray-900"
        id="description"
        name="description"
        placeholder="Description *"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="mx-auto w-36 rounded-full bg-yellow-300 p-2.5 font-bold" type="submit">
        Create Task
      </button>
    </form>
  );
};

export default TodoForm;
