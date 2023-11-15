import { Task } from "@/store/todo";
import TaskComponent from "./task";

export default function Tasks({ tasks }: { tasks: Task[] }) {
  return (
    <div className="py-3">
      {tasks.map((task) => (
        <TaskComponent
          id={task.id}
          name={task.name}
          status={task.status}
          key={task.id}
        />
      ))}
    </div>
  );
}
