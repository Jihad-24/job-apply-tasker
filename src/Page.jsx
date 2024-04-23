import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Hero from "./components/Hero";
import TaskList from "./components/taskList/TaskList";

export default function Page() {
  return (
    <div
      className={`bg-[#191D26] font-[Inter] max-md:px-4 text-white lg:text-lg`}
    >
      <Header />
      <main>
        <Hero />
        <TaskList />
      </main>
      <Footer />
    </div>
  );
}
