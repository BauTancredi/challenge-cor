export type Todo = {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "new" | "in progress" | "done";
};

export type FilterCriteria = "new" | "in progress" | "done" | "all";
