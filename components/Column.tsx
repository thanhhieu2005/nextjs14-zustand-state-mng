"use client";

import { Status, useTaskStore } from "@/lib/store";
import { useEffect, useMemo } from "react";
import Task from "./Task";

const Column = ({ title, status }: { title: string; status: Status }) => {
  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  const tasks = useTaskStore((state) => state.tasks);

  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.status === status),
    [status, tasks]
  );

  const updateTask = useTaskStore((state) => state.updateTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const dragTask = useTaskStore((state) => state.dragTask);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };

  return (
    <section className="h-[600px] flex-1">
      <h2 className="ml-1 font-serif text-2xl font-semibold">{title}</h2>
      <div
        className="mt-3 h-full w-full flex-1 rounded-xl bg-gray-500"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Column;
