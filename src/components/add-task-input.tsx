import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/store/todo";
import { useState } from "react";

export default function AddTaskInput() {
  // zustand store accessing action
  const addTask = useTaskStore((state) => state.addTask);
  const [input, setInput] = useState("");

  function handleAdd() {
    addTask({ id: "123", name: input, status: "IN_PROGRESS" });
    setInput("");
  }

  return (
    <div className="mb-4 flex flex-row items-center gap-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task"
      />
      <Button disabled={!input} onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
