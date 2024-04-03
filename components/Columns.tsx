import Column from "./Column";
import NewTaskDialog from "./NewTaskDialog";

const Columns = () => {
  return (
    <div className="pt-16">
      <NewTaskDialog />
      <section className="mt-10 flex gap-6 lg:gap-12">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
};

export default Columns;
