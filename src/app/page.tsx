"use client";

import { useTaskStore } from "@/store/todo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tasks from "@/components/tasks";
import AddTaskInput from "@/components/add-task-input";

export default function Home() {
  // zustand store access value
  const tasks = useTaskStore((state) => state.tasks);

  const completedTasks = tasks.filter((item) => item.status == "COMPLETED");
  const inProgressTasks = tasks.filter((item) => item.status == "IN_PROGRESS");

  return (
    <div className="max-w-[400px] mx-auto flex flex-col items-center h-screen pt-12">
      <AddTaskInput />
      <div>
        <Tabs defaultValue="active" className="w-full">
          <TabsList>
            <TabsTrigger value="active">Inprogress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <Tasks tasks={inProgressTasks} />
          </TabsContent>
          <TabsContent value="completed">
            <Tasks tasks={completedTasks} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
