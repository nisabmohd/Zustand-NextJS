import { Task, useTaskStore } from "@/store/todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2Icon } from "lucide-react";

export default function TaskComponent({ id, name, status }: Task) {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  function handleTaskCompletion() {
    updateTask(id, {
      status: status == "COMPLETED" ? "IN_PROGRESS" : "COMPLETED",
    });
  }
  return (
    <div className="flex flex-row items-center justify-between my-4">
      <div className="flex flex-row items-center gap-2">
        <Checkbox
          onClick={handleTaskCompletion}
          defaultChecked={status == "COMPLETED"}
        />
        <p className="">{name}</p>
      </div>
      <Trash2Icon
        onClick={() => deleteTask(id)}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
}
