import { useState } from "react";

function TodoApp() {
  const [name, setName] = useState("");

  return (
    <main className="mx-auto my-0 border-2 p-2 md:w-8/12">
      <form action="" className="flex flex-col justify-center gap-3">
        <div className="flex justify-between gap-2">
          <input
            required
            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="name"
            name="name"
            placeholder="Title"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="priority"
            name="priority"
          >
            <option disabled hidden selected value="">
              Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            className="grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="status"
            name="status"
          >
            <option disabled hidden selected value="">
              Status
            </option>
            <option value="low">New</option>
            <option value="medium">In progess</option>
            <option value="High">Done</option>
          </select>
        </div>
        <textarea
          className="w-full grow rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          id="description"
          name="description"
          placeholder="Description"
          rows={5}
        />
        <button className="mx-auto w-36 rounded-lg border border-gray-300 bg-gray-50 p-2.5">
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
            <option value="low">Low</option>
            <option value="medium">Medium</option>
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
        <li className="my-2 border-2 p-2">
          <div className="flex items-center justify-between">
            <div className="flex gap-20">
              <p>{`Priority: ${"Low"}`}</p>
              <p>{`Status: ${"New"}`}</p>
            </div>
            <button className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900">
              Delete
            </button>
          </div>
          <h3 className="text-2xl">{`Title: ${"Title"}`}</h3>
          <p className="my-2">Description:</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum iure facilis
            officia deleniti reprehenderit! Iure saepe tempore quo quam molestiae vero quasi, labore
            exercitationem reiciendis quidem qui. Commodi, doloremque.
          </p>
        </li>
      </ul>
    </main>
  );
}

export default TodoApp;
