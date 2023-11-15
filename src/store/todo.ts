import { create } from "zustand";

export type Task = {
  id: string;
  status: "IN_PROGRESS" | "COMPLETED";
  name: string;
};

type TaskValue = {
  tasks: Task[];
};

type TaskActions = {
  updateTask: (id: string, task: Partial<Omit<Task, "id">>) => void;
  deleteTask: (id: string) => void;
  addTask: (task: Task) => void;
};

export const useTaskStore = create<TaskValue & TaskActions>((set) => ({
  tasks: [],
  addTask: (task) => {
    set((prev) => ({ tasks: [task, ...prev.tasks] }));
  },
  deleteTask: (id) => {
    set((prev) => ({ tasks: prev.tasks.filter((item) => item.id != id) }));
  },
  updateTask(id, task) {
    set((prev) => ({
      tasks: prev.tasks.map((item) =>
        item.id == id ? { ...item, ...task } : item
      ),
    }));
  },
}));
