import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/store/todo";
import { useState } from "react";
import { UUID } from "uuid-generator-ts";

export default function AddTaskInput() {
  // zustand store accessing action
  const addTask = useTaskStore((state) => state.addTask);
  const [input, setInput] = useState("");

  function handleAdd() {
    const uuid = new UUID();
    addTask({ id: uuid.getDashFreeUUID(), name: input, status: "IN_PROGRESS" });
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
