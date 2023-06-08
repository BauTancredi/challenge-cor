import { FilterCriteria } from "../types";

type FilterProps = {
  setFilter: (filter: FilterCriteria) => void;
};

const Filter = ({ setFilter }: FilterProps) => {
  return (
    <>
      <h2 className="text-2xl">Filter by status:</h2>
      <div className="my-5 flex gap-3">
        <div className="flex flex-col">
          <label htmlFor="">Status</label>
          <select
            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            id="status"
            name="status"
            onChange={(e) => setFilter(e.target.value as FilterCriteria)}
          >
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="in progress">In progess</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
