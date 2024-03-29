import Columns from "@/components/Columns";

export default function Home() {
  return (
    <section className="flex h-screen bg-gradient-to-br from-gray-700 to gray-900 ">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Columns />
      </div>
    </section>
  );
}
