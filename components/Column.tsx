import Task from "./Task";

const tasks = [
  {
    id: "1234",
    title: "Init first task",
    description: "Description of first task",
    status: "TODO",
  },
];

const Column = ({ title, status }: { title: string; status: string }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="h-[600px] flex-1">
      <h2 className="ml-1 font-serif text-2xl font-semibold">{title}</h2>
      <div className="mt-3 h-full w-full flex-1 rounded-xl bg-gray-500">
        <div className="flex flex-col gap-4">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Column;
